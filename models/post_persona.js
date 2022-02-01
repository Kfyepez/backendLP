const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('posts_personas', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true
        },
        id_post: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'posts',
                key: 'id'
            }
        },
        id_persona: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'personas',
                key: 'id'
            }
        },

    }, {
        sequelize,
        tableName: 'posts_personas',
        timestamps: false
    });
};