var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Persona = require('../models').persona;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Dashboard' });
});

router.get('/personas', function(req, res, next) {
  Persona.findAll({
      attributes: { exclude: ["updatedAt","createdAt"] }
  })
  .then(personas => {
      res.send(personas);
  })
  .catch(error => res.status(400).send(error))

}); 

router.get('/productos', function(req, res, next) {
  res.render('productos', { title: 'My Dashboard :: Productos' });
});

module.exports = router;
