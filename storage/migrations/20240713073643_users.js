/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unique();
    table.string("user_name").notNullable();
    table.string("first_name").notNullable();
    table.datetime("createdAt").defaultTo(knex.fn.now());
    table.timestamp("last_visit").defaultTo(knex.fn.now());
    table.boolean("is_bot")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  knex.schema.dropTableIfExists('users')
};
