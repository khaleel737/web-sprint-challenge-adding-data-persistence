const db = require("../../data/dbConfig");


function getTask() {
    return db("projects as pj")
    .select('ts.*', 'pj.project_name', 'pj.project_description')
    .leftJoin('tasks as ts', 'pj.project_id', 'ts.project_id')
}

function findById(id) {
  return db("tasks")
    .where({ id })
    .first();
}

// async function add(hub) {
//   const [id] = await db('hubs').insert(hub);

//   return findById(id);
// }


function createTask(task) {
return db("tasks").insert(task);

  // return getAnimals().where({ project_id }).first();
}

module.exports = { 
  getTask,
  findById,
  createTask };
