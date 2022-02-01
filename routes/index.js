var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Dashboard' });
});

router.get('/personas', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  models.personas.findAll({
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
  models.hoteles.findAll({
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
  models.destinos.findAll({
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
  models.imagenes.findAll({
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
  models.rutas.findAll({
      attributes: { exclude: ["updatedAt","createdAt"] }
  })
  .then(rutas => {
      res.send({"rutas":rutas});
  })
  .catch(error => res.status(400).send(error))

}); 
/*
router.get('/rutas2', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  models.rutas.findAll({
      attributes: { exclude: ["updatedAt","createdAt"] },
      include: [{ 
        model: models.destinos,
        as: 'destino',
        attributes: ['name']
     }],
  })
  .then(rutas => {
      res.send({"rutas":rutas});
  })
  .catch(error => res.status(400).send(error))

}); */

//Rutas especificas de cierto destino turistico
router.get('/rutas/:idDestino', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  models.rutas.findAll({
      attributes: { exclude: ["updatedAt","createdAt"] },
     where: {
      id_destino: req.params.idDestino.replace(":","")
     }
  })
  .then(rutas => {
      res.send({"rutas":rutas});
  })
  .catch(error => res.status(400).send(error))

}); 

//Recomendaciones de hoteles especificas de cierto destino turistico
router.get('/recomendaciones_hoteles/:idDestino', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  models.hoteles.findAll({
      attributes: { exclude: ["updatedAt","createdAt"] },
     where: {
      id_destino: req.params.idDestino.replace(":","")
     }
  })
  .then(hoteles => {
      res.send({"hoteles":hoteles});
  })
  .catch(error => res.status(400).send(error))

}); 

router.get('/posts', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  models.posts.findAll({
      attributes: { exclude: ["updatedAt","createdAt","id_forest","id_imagen"] },
      include: [{ 
        model: models.destinos,
        as: 'destino',
        attributes: ['name']
     },
     { 
      model: models.imagenes,
      as: 'imagen',
      attributes: ['link']
   },
    ],
  })
  .then(posts => {
      res.send({"posts":posts});
  })
  .catch(error => res.status(400).send(error))

}); 

router.get('/posts/:idDestino', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  models.posts.findAll({
      attributes: { exclude: ["updatedAt","createdAt","id_forest","id_imagen"] },
      include: [{ 
        model: models.destinos,
        as: 'destino',
        attributes: ['name']
     },
     { 
      model: models.imagenes,
      as: 'imagen',
      attributes: ['link']
   },
    ],
    where: {
      id_forest: req.params.idDestino.replace(":","")
     }
  })
  .then(posts => {
      res.send({"posts":posts});
  })
  .catch(error => res.status(400).send(error))

}); 


module.exports = router;
