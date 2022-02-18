const db = require("../../data/dbConfig");


function getProject() {
  return db("projects")
}

function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}

// async function add(hub) {
//   const [id] = await db('hubs').insert(hub);

//   return findById(id);
// }


function createProject(project) {
  return db("projects").insert(project);
  // return findById(project_id);
  // return getAnimals().where({ project_id }).first();
}

module.exports = { 
  getProject,
  findById,
  createProject };
