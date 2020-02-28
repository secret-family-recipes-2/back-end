
exports.up = function (knex) {
    return knex.schema
        .createTable("users", tbl => {
            tbl.increments();

            tbl
                .string("username", 128)
                .notNullable()
                .unique();

            tbl.string("password", 128).notNullable();
        })
        .createTable("recipes", tbl => {
            tbl.increments("id");

            tbl.string("title", 255).notNullable();

            tbl.string("source", 255).notNullable();

            tbl.text("ingredients").notNullable();

            tbl.text("instructions").notNullable();

            tbl.string("category", 255).notNullable();

            // recipe public or private defaults to true (private)
            tbl
                .string("private", 128)
                .notNullable()
                .defaultTo("true");

            tbl
                .integer("user_id")
                .unsigned()
                .notNullable()
                .references("users.id")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");

        });
};

exports.down = function (knex) {

    return (
        knex.schema
            .dropTableIfExists("recipes")
            .dropTableIfExists("users")
    )
};
