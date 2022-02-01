var DataTypes = require("sequelize").DataTypes;
var _destinos = require("./destino_turistico");
var _imagenes = require("./imagen");
var _personas = require("./persona");
var _posts_personas = require("./post_persona");
var _posts = require("./post");
var _hoteles = require("./recomendacion_hotel");
var _rutas = require("./ruta");


function initModels(sequelize) {
  var destinos = _destinos(sequelize, DataTypes);
  var imagenes = _imagenes(sequelize, DataTypes);
  var personas = _personas(sequelize, DataTypes);
  var posts_personas = _posts_personas(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);
  var hoteles = _hoteles(sequelize, DataTypes);
  var rutas = _rutas(sequelize, DataTypes);
//asosiacion de post_persona con personas
  personas.hasMany(posts_personas,{ as: "posts_personas", foreignKey: "id"});
  posts_personas.belongsTo(personas,{ as: "persona", foreignKey: "id_persona"});
//asosiacion de post con post_personas
  posts.hasMany(posts_personas,{ as: "posts_personas", foreignKey: "id"});
  posts_personas.belongsTo(posts,{ as: "post", foreignKey: "id_post"});

//asosiacion de destinos_turisticos con post
  destinos.hasMany(posts,{ as: "posts", foreignKey: "id"});
  posts.belongsTo(destinos,{ as: "destino", foreignKey: "id_forest"});
//asosiacion de rutas y destinos_turisticos
  destinos.hasMany(rutas,{ as: "rutas", foreignKey: "id"});
  rutas.belongsTo(destinos,{ as: "destino", foreignKey: "id_destino"});
//asociacion de recomendacion_hotel con destinos_turisticos
  destinos.hasMany(hoteles,{ as: "hoteles", foreignKey: "id"});
  hoteles.belongsTo(destinos,{ as: "destino", foreignKey: "id_destino"});

//asociacon de post con imagenes
imagenes.hasOne(posts,{ as: "posts", foreignKey: "id"})
posts.belongsTo(imagenes,{ as: "imagen", foreignKey: "id_imagen"})

  return {
    destinos,imagenes,personas,posts_personas,posts,hoteles,rutas
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;