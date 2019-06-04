const express = require('express');
const app = express();

//TODO: Add an express router
const router = express.Router();

// Setup middleware so we can read the requests body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router); // so router can work

// defining routes for the router
app.use('/MealTimes', require('./routes/MealTimes/MealTimesRoutes'));
app.use('/Dates', require('./routes/Dates/DatesRoutes'));
app.use('/StopWords', require('./routes/StopWord/StopWordRoutes'));
app.use('/Query', require('./routes/Query'));

// Set up port and have app listen
const PORT = ('port', process.env.PORT || 3000);
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
