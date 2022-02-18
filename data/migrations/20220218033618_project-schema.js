exports.up = function (knex) {
    return knex.schema
      .createTable("project", (proj) => {
        proj.increments("project_id").primary();
        proj.string("project_name", 256).notNullable();
        proj.string("project_description")
        proj.integer("project_completed").defaultTo(0)


//   - [ ] `project_id` - primary key
//   - [ ] `project_name` - required
//   - [ ] `project_description` - optional
//   - [ ] `project_completed` - the database defaults it to `false` (integer 0) if not provided
      })
      .createTable("resource", (res) => {
        res.increments("resource_id").primary()

        res.string("resource_name").unique().notNullable()
        res.string("resource_description")


//   - [ ] `resource_id` - primary key
//   - [ ] `resource_name` - required and unique
//   - [ ] `resource_description` - optional
      })
      .createTable("task", (task) => {
          task.increments("task_id").primary()
          task.string("task_description").notNullable()
          task.string("task_notes");
          task.integer("task_completed").defaultTo(0)
          task.integer("project_id").notNullable().references('project_id').inTable('project')

          
//   - [ ] `task_id` - primary key
//   - [ ] `task_description` - required
//   - [ ] `task_notes` - optional
//   - [ ] `task_completed` - the database defaults it to `false` (integer 0) if not provided
//   - [ ] `project_id` - required and points to an actual `project_id` in the `projects` table
      })
      .createTable("project_resources", (proRes) => {
        proRes.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('project')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        proRes.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resource')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      proRes.primary(['project_id', 'resource_id'])

      

      });
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists("project_resources")
      .dropTableIfExists("task")
      .dropTableIfExists("resource")
      .dropTableIfExists("project")
  };
  
//   - [ ] A **project** is what needs to be done and is stored in a `projects` table with the following columns:

//   - [ ] `project_id` - primary key
//   - [ ] `project_name` - required
//   - [ ] `project_description` - optional
//   - [ ] `project_completed` - the database defaults it to `false` (integer 0) if not provided

// - [ ] A **resource** is anything needed to complete a project and is stored in a `resources` table with the following columns:

//   - [ ] `resource_id` - primary key
//   - [ ] `resource_name` - required and unique
//   - [ ] `resource_description` - optional

// - [ ] A **task** is one of the steps needed to complete a project and is stored in a `tasks` table with the following columns:

//   - [ ] `task_id` - primary key
//   - [ ] `task_description` - required
//   - [ ] `task_notes` - optional
//   - [ ] `task_completed` - the database defaults it to `false` (integer 0) if not provided
//   - [ ] `project_id` - required and points to an actual `project_id` in the `projects` table

// - [ ] A **resource assignment** connects a resource and a project, and is stored in a `project_resources` table. You decide what columns to use.