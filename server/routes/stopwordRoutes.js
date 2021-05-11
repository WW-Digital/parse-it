const stopwordRouter = require('express').Router()
const stopwordController = require('../controllers/stopwordsController')

stopwordRouter.get('/', stopwordController)

module.exports = stopwordRouter