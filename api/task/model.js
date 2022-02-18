const db = require("../../data/dbConfig");


function getTask() {
  return db("tasks")
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
