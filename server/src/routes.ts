import express from 'express';

import PointController from './controllers/PointsControllers';
import ItemsController from './controllers/itemsControllers';

const routes = express.Router();
const pointsController = new PointController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);

export default routes;