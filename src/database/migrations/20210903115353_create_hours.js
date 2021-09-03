
exports.up = function(knex) {
  return knex.schema
    .createTable('hours', function (table) {
      table.increments('id');
      table.integer('user_id', 255).notNullable();
      table.string('dailyHours', 255).notNullable();
      table.integer('hour', 2);
      table.integer('minutes', 2);
      table.string('chegada', 5).notNullable();
      table.string('saida_almoco', 5);
      table.string('chegada_almoco', 5);
      table.string('saida', 5);
      table.timestamps();
      table.foreign('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("hours");
};
