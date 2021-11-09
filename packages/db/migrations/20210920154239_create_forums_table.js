

export async function up(knex) {
    return knex.schema.createTable('forums', table => {
      table.increments('id').primary();
      table.string('title');
      table.string('summary').nullable();
      table.integer('trivia_id').unsigned();
      table.integer('created_by').unsigned();
      table.foreign('created_by').references('users.id').onDelete('cascade');
      table.foreign('trivia_id').references('trivias.id').onDelete('cascade');
      table.timestamps();
    });
  }


  export async function down(knex) {
      return knex.schema.dropTable('forums')
  }
