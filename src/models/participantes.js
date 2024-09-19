const { DataTypes } = require ("sequelize");
const sequelize = require ("../config/config")
const Evento = require("./evento")

const Participante = sequelize.define("participante", {
    EventoId: {
        type: DataTypes.INTEGER,
        references: {
            model: Evento,
            key: 'id'
        },
    },
    
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }

})

module.exports = Participante;