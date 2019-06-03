const express = require('express');

const router = express.Router();

router.use('/mealtimes', require('../routes/mealtimes/mealTimes'));
router.use('/dates', require('../routes/dates/dates.js'));
router.use('/stopwords', require('../routes/stopword/stopWords.js'))
router.use('/query', require('../routes/query/query.js'));

router.get('/', (req, res) => {
    res.send('Home page');
});

module.exports = router;


