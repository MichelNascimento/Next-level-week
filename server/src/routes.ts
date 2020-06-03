import express from 'express';

import PointController from './controllers/PointsControllers';
import ItemsController from './controllers/ItemsControllers';

const routes = express.Router();
const pointsController = new PointController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;