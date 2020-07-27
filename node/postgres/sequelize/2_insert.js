const models = require('./models')

async function insert() {

    //Eventos
    const eventoNode = await models.evento.create({nome: 'Encontro de Nodejs', data: '2020-4-01'})
    const eventoPostgres = await models.evento.create({nome: 'Encontro de Postgresql', data: '2020-4-01'})
    await models.evento.create({nome: 'Vue.js', data: '2020-9-01'})
    await models.evento.create({nome: 'React.js', data: '2020-8-01'})
    await models.evento.create({nome: 'Angular.js', data: '2020-7-01'})

    //Participantes
    const carlos = await models.participante.create({nome: 'Carlos'})
    const augusto = await models.participante.create({nome: 'Augusto'})
    const janaina = await models.participante.create({nome: 'Janaína'})
    const rafael = await models.participante.create({nome: 'Rafael'})

    //Participantes em eventos
    await eventoNode.setParticipantes([carlos, augusto, janaina])
    await eventoPostgres.setParticipantes([janaina, rafael])

    await models.sequelize.close()

    console.log("Dados Inseridos");
}

insert()
