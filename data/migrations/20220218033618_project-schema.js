exports.up = function (knex) {
    return knex.schema
      .createTable("projects", (proj) => {
        proj.increments("project_id").primary();
        proj.string("project_name", 256).notNullable();
        proj.string("project_description", 255)
        proj.integer("project_completed").defaultTo(0)
      })
      .createTable("resources", (res) => {
        res.increments("resource_id").primary()
        res.string("resource_name").unique().notNullable()
        res.string("resource_description")
      })
      .createTable("tasks", (task) => {
          task.increments("task_id").primary()
          task.string("task_description").notNullable()
          task.string("task_notes").defaultTo(null);
          task.integer("task_completed").defaultTo(0)
          task.integer("project_id").notNullable().references('project_id').inTable('projects')
      })
      .createTable("project_resources", (proRes) => {
        proRes.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        proRes.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      proRes.primary(['project_id', 'resource_id'])
      });
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists("project_resources")
      .dropTableIfExists("tasks")
      .dropTableIfExists("resources")
      .dropTableIfExists("projects")
  };
