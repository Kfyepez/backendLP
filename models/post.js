const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('posts', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true
        },
        id_forest: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'destinos_turisticos',
                key: 'id'
            }
        },
        id_imagen: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'imagenes',
                key: 'id'
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        }

    }, {
        sequelize,
        tableName: 'posts',
        timestamps: false
    });
};