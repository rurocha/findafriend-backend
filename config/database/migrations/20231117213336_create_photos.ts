import { Knex } from "knex"


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('photos', (table) => {
    table.increments('id').primary()
    table.string('url', 255).notNullable()
    table.integer('pet_id').notNullable().unsigned()
    table.foreign('pet_id').references('pets.id').onDelete('CASCADE').onUpdate('CASCADE')
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('photos')
}

