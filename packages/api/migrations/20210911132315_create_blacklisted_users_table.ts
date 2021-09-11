import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('blacklisted_users', table => {
    table.increments('id').primary();
    table.boolean('is_restricted');
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id').onDelete('cascade');
    table.timestamps();
  });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('blacklisted_users')
}
