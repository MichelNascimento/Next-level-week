import express from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import PointController from './controllers/PointsControllers';
import ItemsController from './controllers/ItemsControllers';

const routes = express.Router();

const upload = multer(multerConfig);

const pointsController = new PointController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

// rota de cadastro de ponto, junto com o upload de imagem.
routes.post('/points', upload.single('image'), pointsController.create);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;