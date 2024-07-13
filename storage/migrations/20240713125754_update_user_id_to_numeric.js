exports.up = function(knex) {
    return knex.schema.alterTable('users', (table) => {
        table.specificType('user_id', 'NUMERIC').alter();
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable('users', (table) => {
        table.integer('user_id').alter();
    });
};
