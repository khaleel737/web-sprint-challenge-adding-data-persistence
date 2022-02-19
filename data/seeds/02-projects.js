// DO NOT CHANGE THIS FILE
const projects = [
    { project_name: 'testing', project_description: 'checking pro', project_completed: true },
    { project_name: 'testing323', project_description: 'testing', project_completed: false },
    { project_name: 'testing new', project_description: 'ljdlksajlkdjads', project_completed: false }
  ]
  
  exports.projects = projects
  
  exports.seed = function (knex) {
    return knex('projects').insert(projects)
  }
  