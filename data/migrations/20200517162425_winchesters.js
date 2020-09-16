
exports.up = async function(knex) {
  await knex.schema.createTable("winchesters", (table) => {
      table.increments()
      table.text("name").notNull()
      table.text("role").notNull()
      table.text("years_active").notNull()
      table.integer("death_count").notNull()
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("winchesters")
}
