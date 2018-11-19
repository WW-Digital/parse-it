const express = require('express');

const app = express();
const router = app.Router();

router.get('/', function (req, res) {
    res.send('Parse It!');
});

//TODO Fulfill endpoint to list Identifiers & Stop Words
router.use('/mealtimes', function (req, res) {
    res.json({todo: 'List mealtimes'});
});
router.use('/dates', function (req, res) {
    res.json({todo: 'List dates'});
});

//TODO Parse the query!
router.post('/parse', function (req, res) {
    const query = req.param('query');
    res.json({todo: `Parse the query string: ${query}`});
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});