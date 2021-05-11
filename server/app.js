const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//import routers
const mealtimesRouter = require('./routes/mealtimeRoutes')
const datesRouter = require('./routes/datesRoutes')
const stopwordsRouter = require('./routes/stopwordRoutes')
const postQueryRouter = require('./routes/PostQueryAnalysisRoute')

//use routers middleware
app.use('/mealtimes', mealtimesRouter)
app.use('/dates', datesRouter)
app.use('/stopwords', stopwordsRouter)
app.use('/', postQueryRouter)





app.listen(PORT, 'localhost')
