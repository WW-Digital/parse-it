const express = require('express');

const app = express();

//TODO: Add an express router

app.get('/', function (req, res) {
    res.send('Parse It!');
});

//TODO Fulfill endpoint to list Identifiers & Stop Words
app.get('/mealtimes', function (req, res) {
    res.json({todo: 'List mealtimes'});
});
app.get('/dates', function (req, res) {
    res.json({todo: 'List dates'});
});

//TODO Parse the query!
app.post('/parse', function (req, res) {
    const query = req.param('query');
    res.json({todo: `Parse the query string: ${query}`});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
