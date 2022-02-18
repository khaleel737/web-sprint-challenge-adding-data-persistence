// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()
const Resources = require('./model')


router.get('/', async (req, res) => {
    const allResources = await Resources.getResource();

    res.json(allResources)
})

router.post('/', async (req, res) => {
    const insertProject = await Resources.createResource(req.body)

    res.json(insertProject)
})


module.exports = router;
