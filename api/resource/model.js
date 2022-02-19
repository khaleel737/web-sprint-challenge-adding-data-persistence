const db = require("../../data/dbConfig");


async function getResource() {
    const resource = await db("resources")
    return resource;
}


 async function createResource(resource) {
const insertResource = await db('resources').insert(resource)
return db('resources').where('resource_id', insertResource).first() 
}


module.exports = { 
  getResource,
  createResource };