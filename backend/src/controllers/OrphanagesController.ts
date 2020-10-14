import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import OrphanageView from '../views/OrphanagesView';
import Orphanages from '../models/Orphanages';

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
  
    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    })
  
    await orphanagesRepository.save(orphanage);
  
    return response.status(201).json({orphanage});
  }
};