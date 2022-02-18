// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()
const Tasks = require('./model')


router.get('/', async (req, res) => {
    const allTasks = await Tasks.getTask();

    res.json(allTasks)
})

router.post('/', async (req, res) => {
    const insertProject = await Tasks.createTask(req.body)

    res.json(insertProject)
})


module.exports = router;
