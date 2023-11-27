import { resolve } from 'node:path'

export default {
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'rrocha',
    password: 'password',
    database: 'findafriend'
  },

  pool: {
    min: 2,
    max: 10,
  },

  migrations: {
    tableName: 'migrations',
    directory: resolve(__dirname, 'config', 'database', 'migrations')
  },

  seeds: {
    tableName: 'seeds',
    directory: resolve(__dirname, 'config', 'database', 'seeders')
  }
}
