import express from 'express';
import { getRepository } from 'typeorm';
import Orphanages from './models/Orphanages';

import './database/connection';

const app = express();
app.use(express.json());

// app.get('/users/:id', (request, response)=>{
//   console.log(request.query)
//   console.log(request.params)
//   console.log(request.body)
//   return response.json({ message: 'Hello Wolf' });
// });

app.post('/orphanages', async (request, response) => {
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

  return response.json({ message: 'Hello Wolf' });
})

app.listen(3333)
// localhost:3333

// notes: driver nativo, query builder, ORM

