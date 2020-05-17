exports.seed = async function(knex) {
  await knex("winchesters").truncate()
  await knex("winchesters").insert([
    {
      name: "Dean Winchester",
      role: "hunter",
      years_active: "1995 - Current",
      death_count: 112,
    },
    {
      name: "Sam Winchester",
      role: "hunter",
      years_active: "1998 - Current",
      death_count: 6,
    },
    {
      name: "John Winchester",
      role: "hunter",
      years_active: "1983 - 2006",
      death_count: 1,
    },
    {
      name: "Mary Winchester",
      role: "hunter",
      years_active: "1972-1978, 1980, 2016-2019",
      death_count: 2,
    },
  ])
}