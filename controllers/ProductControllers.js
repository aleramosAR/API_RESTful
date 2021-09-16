import ProductosAPI from '../api/Productos.js';

export default class ProductsController {

  constructor() {
    this.productosAPI = new ProductosAPI();
  }

  getProducts = async(req, res) => {
    try {
      const productos = await this.productosAPI.getProductos();
      if (productos.length === 0) { return res.status(404).json({ error: "No hay productos cargados." }) }
      res.status(200).json(productos);
    } catch (err) { return res.status(404).json({ error: "No hay productos cargados." }); }
  };
  
  getProduct = async(req, res) => {
    try {
      const prod = await this.productosAPI.getProducto(req.params.id);
      if (!prod) { return res.status(404).json({ error: "Producto no encontrado." }); }
      res.status(200).json(prod);
    } catch (err) { return res.status(404).json({ error: "Producto no encontrado." }); }
  };
  
  postProduct = async(req, res) => {
    try {
      const newProducto = await this.productosAPI.postProducto(req.body);
      res.status(201).json(newProducto);
    } catch (err) { res.status(400).send(); }
  };
  
  updateProduct = async(req, res) => {
    const { id } = req.params;
    const newData = req.body;
  
    try {
      const updatedProd = await this.productosAPI.updateProducto(id, newData);
      res.status(200).json(updatedProd);
    } catch (err) {
      res.status(404).json({ error: "Producto no encontrado." });
    }
  };
  
  deleteProduct = async(req, res) => {
    try {
      const prod = await this.productosAPI.deleteProducto(req.params.id);
      res.status(202).json(prod);
    } catch (err) {
      res.status(404).json({ error: "Producto no encontrado." });
    }
  };
  
  post = async(producto) => {
    try {
      const newProducto = await this.productosAPI.postProducto(producto);
      return newProducto;
    } catch (err) { return { error: "Error al grabar producto" } }
  };
  
  get = async() => {
    try {
      const productos = await this.productosAPI.getProductos();
      if (productos.length === 0) { return { error: "No hay productos cargados." }; }
      return productos;
    } catch (err) {
      return { error: "No hay productos cargados." };
    }
  };

}