import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('levels', table => {
    table.increments('id').primary();
    table.string('name');
    table.timestamps();
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('levels');
}

