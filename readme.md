# Esquema API RESTful

* #### Revisar en forma completa el proyecto entregable que venimos realizando, refactorizando y reformando todo lo necesario para llegar al esquema de servidor API RESTful en capas planteado en esta clase.
* #### No hace falta realizar una aplicación front React.JS, sólo dejar al servidor bien estructurado con su ruteo / controlador, negocio, validaciones, persistencia y configuraciones, preferentemente utilizando en la codificación clases de ECMAScript ó Typescript.
<br /> <br/>
<hr />
<br />
La configuración es cargada desde archivos de variables de entorno (```production.env``` y ```development.env```), en caso de no levantarse esos archivos definí variables fijas en config.js
<br /><br />
<hr />
<br />
Utilice los patrones **Factory** y **Singleton** en la creación de los models.
<br /><br />
<hr />
<br />
Los productos y mensajes, al guardarse o actualizarse usan un DTO, desde el DTO pasé a mayúsculas el nombre del producto en el caso de Productos, y el texto del mensaje en el caso de Mensajes.
<br /><br />
<hr />
<br />
El patron Factory esta aplicado tanto en mensajes como en productos.
Hay DAOs creados para los 4 métodos de persistencia utilizados (Memoria, File, MySQL y MongoDB)
<br /><br />
<hr />
<br />
Use Joi para validar que los datos estén corretamente ingresados, que los campos no vengan vacios, y que sean strings o números según el caso.
<br /><br />
<hr />
<br />
Agregue scripts en package.json para tener todas las opciones de sesteo.

```
"dev": "NODE_ENV=development node server.js",
"prod": "NODE_ENV=production node server.js",
"start": "node server.js",
"watch": "nodemon server.js"
```
<br />
<hr />
<br />
Para las capas de negocios (api), controllers y routes ahora cree clases (**MensajesAPI**, **ProductosAPI**, **MensajesController**, **ProductControllers**, **FrontControllers**, **FrontRoutes**, **ProductRoutes**, **MensajesRoutes**) donde junte todas las funcionalidades para que estén mas ordenadas y no se importen/exporten por separado.
<br /><br />
<hr />
<br />
Renombre la carpeta ```/negocio``` como ```/api```.
<br /><br />
<hr />
<br />
En la carpeta ```/model``` ordene los elementos creando una carpeta ```/DAOs``` y ```/DTOs```