const db = require("../../data/dbConfig");


function getResource() {
  return db("resources")
}

function findById(id) {
  return db("resources")
    .where({ id })
    .first();
}

// async function add(hub) {
//   const [id] = await db('hubs').insert(hub);

//   return findById(id);
// }


function createResource(resource) {
 return db("resources").insert(resource);

  // return getAnimals().where({ project_id }).first();
}

module.exports = { 
  getResource,
  findById,
  createResource };
