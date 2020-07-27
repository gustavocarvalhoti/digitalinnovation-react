const Sequelize = require('sequelize')
const sequelize = require('../_database')

const Participante = sequelize.define('participante', {
    nome: {
        type: Sequelize.STRING
    },
})

module.exports = Participante

const Evento = require('./evento')
// Um Participante pode ter muitos eventos
Participante.belongsToMany(Evento, {through: 'evento_participante'});
