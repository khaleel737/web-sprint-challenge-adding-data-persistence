const db = require('../../data/dbConfig.js')



// const get = () => {
//     // DO YOUR MAGIC
//     return db('project')
//   }

function get() { // INCLUDING SPECIES NAME
    return db('project');
  }

  function getProject() { // INCLUDING SPECIES NAME
    return db('project as p')
      .leftJoin('resource as r', 'r.project_id')
      .select('a.animal_id', 'a.animal_name', 's.species_name');
  }

     function createProject (project) {
    const project_id =  db('project').insert(project);
    return project_id;
    // return getAnimals().where({ project_id }).first();
  }

  module.exports = { get,getProject, createProject }