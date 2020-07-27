const db = require('./_database')

async function alterarParticipante() {
    await db.connect()

    let sql = "update participante set nome = 'Carlos Augusto' where nome = ($1)"
    await db.query(sql, ['Carlos'])

    sql = "delete from evento_participante where evento_id = ($1) and participante_id = ($2)"
    await db.query(sql, [1, 1])

    await db.end()
    console.log("Participante alterado com sucesso!");
}

alterarParticipante()
