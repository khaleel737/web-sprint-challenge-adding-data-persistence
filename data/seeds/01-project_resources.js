// DO NOT CHANGE THIS FILE
const project_resource = [
    { project_id: '', resource_id: '' },
    { project_id: '', resource_id: '' },
    { project_id: '', resource_id: '' }

  ]
  
  exports.project_resource = project_resource
  
  exports.seed = function (knex) {
    return knex('project_resources').insert(project_resource)
  }
  