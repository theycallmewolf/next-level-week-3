import { Router } from 'express';
import { getRepository } from 'typeorm';
import Orphanages from './models/Orphanages';

const routes = Router();

// routes.get('/users/:id', (request, response)=>{
//   console.log(request.query)
//   console.log(request.params)
//   console.log(request.body)
//   return response.json({ message: 'Hello Wolf' });
// });

routes.post('/orphanages', async (request, response) => {
  // console.log(request.body);
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

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  })

  await orphanagesRepository.save(orphanage);

  return response.status(201).json({orphanage});
})

export default routes;

// notes: driver nativo, query builder, ORM