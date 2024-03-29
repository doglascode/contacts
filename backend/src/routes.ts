import { Router } from 'express';

import contactController from './app/controllers/contactController';
import upload from './app/middlewares/upload';

const routes = Router();

routes.get('/contacts', contactController.index);
routes.get('/contacts/:id', contactController.show);
routes.post('/contacts', upload.single('image'), contactController.store);
routes.put('/contacts/:id', upload.single('image'), contactController.update);
routes.delete('/contacts/:id', contactController.remove);

export default routes;