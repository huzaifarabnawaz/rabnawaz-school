exports.up = function(knex) {
    // Create the table
    return knex.schema.createTable("studentsForm", (table) => {
        table.uuid("id").primary();
        table.string("student_name").notNullable();
        table.string("father_name").notNullable();
        table.string("phone_number", 11).notNullable();
        table.string("class_level").notNullable();
        table.enum("student_gender", ["Male", "Female"]).notNullable();
        table.string("branch").notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    // Drop the table if it exists
    return knex.schema.dropTableIfExists("studentsForm");
};
