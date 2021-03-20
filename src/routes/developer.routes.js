const express = require('express')

const developerController = require('./../controllers/developer.controller')

const router = express.Router()

router.get('/', developerController.findAll)
router.post('/', developerController.create)
router.put('/:id', developerController.update)
router.delete('/:id', developerController.delete)
router.get('/:id', developerController.findById)

module.exports = router