import MensajesAPI from '../api/Mensajes.js';

export default class MensajesController {

  constructor() {
    this.mensajesAPI = new MensajesAPI();
  }

  getMensaje = async(req, res) => {
    try {
      const mensajes = await this.mensajesAPI.getMensajes();
      res.status(200).json(mensajes);
    } catch (err) {
      return res.status(404).json({ error: "No hay mensajes cargados." });
    }
  };

  postMensaje = async(req, res) => {
    try {
      const mensajeData = req.body;
      const newMensaje = await this.mensajesAPI.postMensaje(mensajeData);
      res.status(201).json(newMensaje);
    } catch (err) {
      res.status(400).send();
    }
  };
  
  getMensajes = async() => {
    try {
      const mensajes = await this.mensajesAPI.getMensajes();
      return mensajes;
    } catch (err) {
      return { error: "No hay mensajes cargados." };
    }
  };

}