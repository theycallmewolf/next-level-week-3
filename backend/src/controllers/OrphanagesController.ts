import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import OrphanageView from '../views/orphanages_view';
import Orphanages from '../models/Orphanage';
import * as Yup from 'yup'; // * as Yup because this module don't have an export default inside

export default {

  // common methods: index, show, create, update and delete

  // list orphanages
  async index(request: Request, response: Response){
    const orphanagesRepository = getRepository(Orphanages);
    const orphanages = await orphanagesRepository.find({
      relations: ['images']
    });
    return response.json(OrphanageView.renderMany(orphanages));
  },
  
  // show orphanage
  async show(request: Request, response: Response){
    const { id } = request.params; // o 'id' vem do routes.get('/orphanages/:id'...
    const orphanagesRepository = getRepository(Orphanages);
    const orphanage = await orphanagesRepository.findOneOrFail(id, {relations:['images']});
    return response.json(OrphanageView.render(orphanage));
  },

  // create new orphanage
  async create(request: Request, response: Response){
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    } = request.body;
  
    const orphanagesRepository = getRepository(Orphanages);

    console.log(request.files);

    const requestImages = request.files as Express.Multer.File[];
    
    const images = requestImages.map(image => {
      return { path: image.filename };
    })

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    };

    const schema = Yup.object().shape({
      name: Yup.string().required('nome obrigatório'),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(Yup.object().shape({
        path: Yup.string().required()
      }))
    });
 
    await schema.validate(data, {
      abortEarly: false // false, will report the validation errors on all fields and not the first error that appears
    });

    const orphanage = orphanagesRepository.create(data);
  
    await orphanagesRepository.save(orphanage);
  
    return response.status(201).json({orphanage});
  }
};