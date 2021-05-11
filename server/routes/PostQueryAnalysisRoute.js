const postQueryRouter = require('express').Router()
const postQueryController = require('../controllers/postQueryController')

postQueryRouter.post('/', postQueryController)

module.exports = postQueryRouter