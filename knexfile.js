// Update with your config settings.

module.exports = {

  development: {
    client: 'mssql',
    connection: {
        server: 'localhost',
        user: 'db_user',
        password: '1234',
        database: 'node-react-people-cars',
        options: {
            port: 1433,
            instanceName: 'SQLEXPRESS'
        }
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
