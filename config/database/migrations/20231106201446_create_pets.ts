import { Knex } from "knex"


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('pets', (table) => {
    table.increments('id').primary()
    table.string('name', 255).notNullable()
    table.text('about').notNullable()
    table.string('size', 150).notNullable()
    table.string('energy', 150).notNullable()
    table.string('dependency_level', 150).notNullable()
    table.integer('user_id').notNullable().unsigned()
    table.foreign('user_id').references('users.id').onDelete('CASCADE').onUpdate('CASCADE')
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('pets')
}

