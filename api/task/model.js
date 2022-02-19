const db = require("../../data/dbConfig");


async function getTask() {
  
    const tasks = await db('tasks as ts')
 .leftJoin('projects as pj', 'pj.project_id', '=' ,'ts.project_id')
  .select('ts.*', 'pj.project_name', 'pj.project_description')

//  .where('pj.project_id', 'ts.project_id')

//  db('schemes as sc')
//  .leftJoin('steps as st', 'sc.scheme_id', 'st.scheme_id')
//  .where('sc.scheme_id', scheme_id)
//  .select('ts.*', 'pj.project_name', 'pj.project_')
//  .orderBy('st.step_number', 'asc')

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

    //   - [ ] `task_id` - primary key
    //   - [ ] `task_description` - required
    //   - [ ] `task_notes` - optional
    //   - [ ] `task_completed` - the database defaults it to `false` (integer 0) if not provided
    //   - [ ] `project_id` - required and points to an actual `project_id` in the `projects` table
      
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