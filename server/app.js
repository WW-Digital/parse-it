const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//import routers
const mealtimesRouter = require('./routes/mealtimesRoutes')
const datesRouter = require('./routes/datesRoutes')
const stopwordsRouter = require('./routes/stopwordsRoutes')
const postQueryRouter = require('./routes/postQueryAnalysis')

//use routers middleware
app.use('/', mealtimesRouter)
app.use('/', datesRouter)
app.use('/', stopwordsRouter)
app.use('/', postQueryRouter)





app.listen(PORT, 'localhost')
