import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

// routes.get('/users/:id', (request, response)=>{
//   console.log(request.query)
//   console.log(request.params)
//   console.log(request.body)
//   return response.json({ message: 'Hello Wolf' });
// });

routes.post('/orphanages', OrphanagesController.create);

export default routes;

// notes: driver nativo, query builder, ORM