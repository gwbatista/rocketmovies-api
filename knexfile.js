const path = require("path");

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb) //serve para deleter em CASCADE (não vem habilitado por padrão)
    },
    migrations : {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations") //npx knex migrate:make nome_tabela
    },
    useNullAsDefault: true
  }
};


//knex migrate:make createTags para criar uma migration
// npx knex migrate:latest para executar as migartions e criar as tabelas
