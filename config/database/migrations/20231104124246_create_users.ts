import { Knex } from "knex"


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name', 255).notNullable()
    table.string('email', 255).notNullable().unique()
    table.string('password', 255).notNullable()
    table.string('zip_code', 8).notNullable()
    table.string('address', 255).notNullable()
    table.string('whatsapp', 255).notNullable()
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users')
}

