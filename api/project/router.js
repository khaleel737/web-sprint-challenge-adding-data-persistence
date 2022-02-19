// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const Projects = require('./model')


router.get('/', async (req, res, next) => {
    try {
        const allProjects = await Projects.getProject();
        res.json(allProjects)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
        try {
            const insertProject = await Projects.createProject(req.body)
            res.status(201).json({
                status: 201, 
                project_id: insertProject.project_id,
                project_name: insertProject.project_name,
                project_description: insertProject.project_description,
                project_completed: Boolean(insertProject.project_completed)   
            })
        } catch (err) {
            next(err)
        }
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message
    })
  })

module.exports = router;
