import express from 'express';
import StatusController from '../controllers/status.controller.js';

const statusRouter = express.Router();

statusRouter.get('/', StatusController.get);

export default statusRouter;