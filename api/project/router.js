// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const Projects = require('./model')


router.get('/', async (req, res) => {
    const allProjects = await Projects.get();

    res.json(allProjects)
})

router.post('/', async (req, res) => {
    const insertProject = await Projects.createProject(req.body)

    res.json(insertProject)
})


module.exports = router;
