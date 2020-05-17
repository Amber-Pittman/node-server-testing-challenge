
exports.up = function(knex) {
  await knex.schema.createTable("winchesters", (table) => {
      table.increments()
      table.text("name").notNull()
      table.text("role").notNull()
      table.text("years_active").notNull()
      table.text("death_count").notNull()
};

exports.down = function(knex) {
  await knex.schema.dropTableIfExists("winchesters")
};
