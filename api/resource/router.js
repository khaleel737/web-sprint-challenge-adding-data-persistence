// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()
const Resource = require('./model')


router.get('/', async (req, res, next) => {
    try {
    const allResources = await Resource.getResource();
    res.json(allResources)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
    const  insertResource = await Resource.createResource(req.body)
    res.status(201).json(insertResource)
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