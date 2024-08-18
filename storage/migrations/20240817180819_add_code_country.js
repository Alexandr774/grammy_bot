/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("code_country", (table) => {
    table.increments("id").primary();
    table.string("country_code").notNullable();
    table.string("city_code").notNullable().unique();
    table.string("name_city_ru");
    table.string("name_city_en");
    table.datetime("createdAt").defaultTo(knex.fn.now())
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   knex.schema.dropTableIfExists('code_country');
};