const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//import routers
const mealtimesRouter = require('./routes/getAllMealtimesRoute')
const datesRouter = require('./routes/getAllDatesRoute')
const stopwordsRouter = require('./routes/getAllStopwordsRoute')
const mealtimeValRouter = require('./routes/getMealtimeValueRoute')
const stopwordRouter = require('./routes/getStopwordRoute')

//use routers middleware
app.use('/', mealtimesRouter)
app.use('/', datesRouter)
app.use('/', stopwordsRouter)
app.use('/', mealtimeValRouter)
app.use('/', stopwordRouter)




app.listen(PORT, 'localhost')