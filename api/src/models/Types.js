const { DataTypes } = require ('sequalize')

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('type', {
        name: {
            type: DataTypes.STRING,
            unique: true
        }
    })
}