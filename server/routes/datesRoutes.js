const dateRouter = require('express').Router()
const dateController = require('../controllers/datesController')

dateRouter.get('/', dateController)

module.exports = dateRouter
