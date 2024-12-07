exports.up = function(knex) {
    return knex.schema.createTable("students", (table) => {
        table.uuid("id").primary(); 
        table.string("student_name").notNullable(); 
        table.string("father_name").notNullable(); 
        // table.string("phone_number", 15).notNullable(); 
        table.string("class_level").notNullable(); 
        table.enum("student_gender", ["Male", "Female"]).notNullable(); 
        table.string("branch").notNullable(); 
        table.timestamps(true, true); 
      });
};


exports.up = function(knex) {
    return knex.schema.alterTable("students", (table) => {
        table.dropColumn("phone_number"); // Drops the phone_number column
    });
};


