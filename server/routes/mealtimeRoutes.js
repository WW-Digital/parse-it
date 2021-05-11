const mealtimeRouter = require('express').Router()
const mealtimeController = require('../controllers/mealtimesController')

mealtimeRouter.get('/', mealtimeController)

module.exports = mealtimeRouter