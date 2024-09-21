const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");  // Importando o sequelize já configurado

const Evento = sequelize.define("Evento", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    localizacao: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

// Associação com Participante
Evento.associate = function(models) {
    Evento.hasMany(models.Participante, {
        as: 'participantes',
        foreignKey: 'eventoId',
        onDelete: 'CASCADE'
    });
};

module.exports = Evento;
