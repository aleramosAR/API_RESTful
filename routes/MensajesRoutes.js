import express from 'express';
import MensajesController from '../controllers/MensajesControllers.js';
import { authAPI } from './middlewares/Middlewares.js';

export default class MensajesRoutes {
	constructor() {
		this.controller = new MensajesController();
		this.router = express.Router();
	}

	init() {
		this.router.use(express.json());

		this.router.get('/', this.controller.getMensaje);
		this.router.post('/', authAPI, this.controller.postMensaje);

		return this.router;
	}
}
