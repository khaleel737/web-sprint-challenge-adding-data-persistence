const db = require("../../data/dbConfig");


async function getProject() {
  
    const projects = await db("projects")

    let finalProject = [];

    projects.forEach(project => {
      const projectResolved = {
        project_id: project.project_id,
        project_name: project.project_name,
        project_description: project.project_description,
        project_completed: Boolean(project.project_completed)
      }
      finalProject.push(projectResolved)
    })
    return finalProject;
}


 async function createProject(project) {
const insertProject = await db('projects').insert(project)
return db('projects').where('project_id', insertProject).first() 
}


module.exports = { 
  getProject,
  createProject };
