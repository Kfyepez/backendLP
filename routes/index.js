var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Persona = require('../models').persona;
const Destino = require('../models').destino_turistico;
const Recomendacion = require('../models').recomendacion;
const Imagen = require('../models').imagen;
const Ruta = require('../models').ruta;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Dashboard' });
});

router.get('/personas', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  Persona.findAll({
      attributes: { exclude: ["updatedAt","createdAt"] }
  })
  .then(personas => {
      res.send({"perosnas": personas});
  })
  .catch(error => res.status(400).send(error))

}); 

router.get('/recomendaciones', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  Recomendacion.findAll({
      attributes: { exclude: ["updatedAt","createdAt"] }
  })
  .then(recomendaciones => {
      res.send({'recomendaciones':recomendaciones});
  })
  .catch(error => res.status(400).send(error))

}); 

router.get('/destinos_turisticos', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  Destino.findAll({
      attributes: { exclude: ["updatedAt","createdAt"] }
  })
  .then(destinos => {
      res.send({"destinos":destinos});
  })
  .catch(error => res.status(400).send(error))

}); 
router.get('/imagenes', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  Imagen.findAll({
      attributes: { exclude: ["updatedAt","createdAt"] }
  })
  .then(imagenes => {
      res.send({"imagenes" : imagenes});
  })
  .catch(error => res.status(400).send(error))

}); 

router.get('/rutas', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  Ruta.findAll({
      attributes: { exclude: ["updatedAt","createdAt"] }
  })
  .then(rutas => {
      res.send({"rutas":rutas});
  })
  .catch(error => res.status(400).send(error))

}); 



module.exports = router;
