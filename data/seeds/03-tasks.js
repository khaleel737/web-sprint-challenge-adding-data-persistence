
exports.seed = function(knex, Promise) {
    return knex('task').insert([
      // species_id must match valid species
      { task_description: "Snuffles", task_notes: 1, task_completed: 1, project_id: 1 },
      { task_description: "Snuffles", task_notes: 1, task_completed: 1, project_id: 1 },
      { task_description: "Snuffles", task_notes: 1, task_completed: 1, project_id: 1 },
      { task_description: "Snuffles", task_notes: 1, task_completed: 1, project_id: 1 },
      { task_description: "Snuffles", task_notes: 1, task_completed: 1, project_id: 1 },
      { task_description: "Snuffles", task_notes: 1, task_completed: 1, project_id: 1 },
      { task_description: "Snuffles", task_notes: 1, task_completed: 1, project_id: 1 },
      { task_description: "Snuffles", task_notes: 1, task_completed: 1, project_id: 1 },
      { task_description: "Snuffles", task_notes: 1, task_completed: 1, project_id: 1 },


    ]);
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
