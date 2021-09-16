import express from 'express';
import ProductControllers from '../controllers/ProductControllers.js';
import { authAPI } from './middlewares/Middlewares.js';

export default class ProductRoutes {
	constructor() {
		this.controller = new ProductControllers();
		this.router = express.Router();
	}

	init() {
		this.router.use(express.json());

		this.router.get('/', this.controller.getProducts);
		this.router.get('/:id', this.controller.getProduct);
		this.router.post('/', authAPI, this.controller.postProduct);
		this.router.put('/actualizar/:id', authAPI, this.controller.updateProduct);
		this.router.delete('/borrar/:id', authAPI, this.controller.deleteProduct);

		return this.router;
	}
}
