const models = require('./models')

async function create() {
    // Deleta as tabelas e cria novamente, somente em testes
    await models.sequelize.sync({force: true})
    await models.sequelize.close()
    console.log("Banco sincronizado");
}

create()
