import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

// routes.get('/users/:id', (request, response)=>{
//   console.log(request.query)
//   console.log(request.params)
//   console.log(request.body)
//   return response.json({ message: 'Hello Wolf' });
// });

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images') , OrphanagesController.create);

export default routes;

// notes: driver nativo, query builder, ORM