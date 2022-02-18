
exports.seed = function(knex, Promise) {
    return knex('resource').insert([
      { resource_name: "Star-nosed Mole", resource_description: "5 tasks to complete" }, 
      { resource_name: "Platypus", resource_description: "2 tasks to complete" }, 
      { resource_name: "Chameleon", resource_description: "6 tasks to complete" }, 
      { resource_name: "Snail", resource_description: "24 tasks to complete" },
      { resource_name: "Blue-footed Booby", resource_description: "51 tasks to complete" }, 
      { resource_name: "Anteater", resource_description: "12 tasks to complete" }, 
      { resource_name: "Minotaur", resource_description: "64 tasks to complete" }, 
      { resource_name: "Raccoon", resource_description: "983 tasks to complete" }
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
