import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';
import UsersController from './controllers/UsersController';

const routes = Router();
const upload = multer(uploadConfig);

// routes.get('/users/:id', (request, response)=>{
//   console.log(request.query)
//   console.log(request.params)
//   console.log(request.body)
//   return response.json({ message: 'Hello Wolf' });
// });

// users
routes.post('/register', UsersController.create);
routes.post('/user', UsersController.show);

// orphanages
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images') , OrphanagesController.create);


export default routes;

// notes: driver nativo, query builder, ORM