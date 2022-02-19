// DO NOT CHANGE THIS FILE
const tasks = [
    { task_description: 'hello man', task_notes: 'crack cyber security', task_completed: true, project_id: 4 },
    { task_description: 'jdlsjldkasdsa', task_notes: 'ccrack is good', task_completed: false, project_id: 1 },
    { task_description: 'my seeds are strong', task_notes: 'weed is bad', task_completed: true, project_id: 3 },

  ]
  
  exports.tasks = tasks
  
  exports.seed = function (knex) {
    return knex('tasks').insert(tasks)
  }
  