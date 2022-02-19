// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()
const Resource = require('./model')


router.get('/', async (req, res) => {
    const allResources = await Resource.getResource();
    // req.body.project_completed === 1 ? true : false

    res.json(allResources)
})

router.post('/', async (req, res) => {
    const  insertResource = await Resource.createResource(req.body)

    res.status(201).json(insertResource)
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message
    })
  })

  module.exports = router;