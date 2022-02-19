const db = require("../../data/dbConfig");


async function getResource() {
  
    const resource = await db("resources")

//     let finalResource = [];

//     resource.forEach(resource => {

//       const projectResolved = {
//         resource_id: resource.resource_id,
//         resource_name: resource.resource_name,
//         resource_description: resource.resource_description
//          }


// //   - [ ] `resource_id` - primary key
// //   - [ ] `resource_name` - required and unique
// //   - [ ] `resource_description` - optional

//       resource.push(projectResolved)
      
//     })

    return resource;
}


 async function createResource(resource) {
const insertResource = await db('resources').insert(resource)
return db('resources').where('resource_id', insertResource).first() 
}


module.exports = { 
  getResource,
  createResource };