const db = require("../../data/dbConfig");


async function getTask() {
  
    const tasks = await db('tasks as ts')
 .leftJoin('projects as pj', 'pj.project_id', '=' ,'ts.project_id')
  .select('ts.*', 'pj.project_name', 'pj.project_description')

    let finalTasks = [];

    tasks.forEach(task => {

      const taskResolved = {
        task_id: task.task_id,
        task_description: task.task_description,
        task_notes: task.task_notes,
        task_completed: Boolean(task.task_completed),
        project_id: task.project_id,
        project_name: task.project_name,
        project_description: task.project_description
      }

      finalTasks.push(taskResolved)
    })

    return finalTasks;
}


 async function createTask(task) {
const insertTask = await db('tasks').insert(task)
return db('tasks').where('task_id', insertTask).first() 
}


module.exports = { 
  getTask,
  createTask };