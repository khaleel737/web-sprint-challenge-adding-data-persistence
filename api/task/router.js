// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()
const Tasks = require('./model')


router.get('/', async (req, res, next) => {
    try {
    const allTasks = await Tasks.getTask();
    res.json(allTasks)
    }catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
    const insertTask = await Tasks.createTask(req.body)
        res.status(201).json({
            status: 201, 
            task_id: insertTask.task_id,
            task_description: insertTask.task_description,
            task_notes: insertTask.task_notes,
            task_completed: Boolean(insertTask.task_completed),
            project_id: insertTask.project_id  
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