/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("code_airport", (table) => {
      table.increments("id").primary();
      table.string("city_code");
      table.string("country_code");
      table.string("airport_code");
      table.string("name_airport_en");
      table.string("name_airport_ru");
      table.string("iata_type");

      //внешний ключ
    // table.foreign("city_code").references("city_code").inTable("code_country");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   knex.schema.dropTableIfExists('code_airport');
};