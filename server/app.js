const moment = require('moment');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const identifier = require('./models/Identifier.js');
const stopWord = require('./models/StopWord.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//TODO: Add an express router
app.get('/mealtimes', (req, res) => {
    if (req.query.query === undefined) {
        // returns all
        res.send(JSON.stringify(identifier.MealTimes, null, 2));
        return;
    } else {
        // query exists
        let targetValue = identifier.MealTimes.filter((times) => {
            return times.names.includes(req.query.query);
        });
        if (targetValue.length === 0) {
            // None of them exist
            res.status(404).send({
                status: 'failure',
                    data: [
                        value = null,
                        type = null,
                    ] 
            });
        } else {
            for (let i = 0; i < targetValue.length; i++) {
                targetValue[i] = {
                    status: 'success',
                    data: [
                        value = targetValue[i].value,
                        type = req.query.names,
                    ] 
                }
            }
            res.send(targetValue);
        } 
    }
});

app.get('/dates', (req, res) => {
    if (req.query.query === undefined) {
        // returns all
        res.send(identifier.Dates);
    } else {
        // return sepecified date
        let targetValue = identifier.Dates.filter((date) => {
            return date.names.includes(req.query.query);
        });
        if (targetValue.length === 0) {
            // None of them exist
            res.status(404).send({
                status: 'failure',
                    data: [
                        value = null,
                        names = null,
                    ] 
            });
        } else {
            for (let i = 0; i < targetValue.length; i++) {
                targetValue[i] = {
                    status: 'success',
                    data: [
                        value = targetValue[i].value,
                        names = targetValue[i].names,
                    ] 
                }
            }
        }
        res.send(targetValue);
    }
})

app.get('/stopwords', (req, res) => {
    if (req.query.query === undefined) { // returns all
        res.send(stopWord.stopWordList);
    } else { // return the sepecified stop word
        if (stopWord.isStopWord(req.query.query) === false) { // None of them exist
            res.status(404).send({
                status: 'failure',
                data: [
                    value = null,
                ],
            });
        } else {
            res.send({
                status: 'success',
                data: [
                    value = req.query.query,
                ],
            });
        }
    }
})

app.post('/query', (req, res) => {
    if (req.body.Query === undefined) {
        res.status(400).send('Bad request, cannot enter an empty string');
    } else {
        let wordArray = req.body.Query.split(' ');
        for (let i = 0; i < wordArray.length; i++) {
            wordArray[i] = {
                matchedWord: wordArray[i],
                type: whichType(wordArray[i]),
                value: whichValue(wordArray[i]),
            }
        }
        res.send(wordArray);
    }
});

// Checking the type of 'word'
const whichType = (word) => {
    word = word.toLowerCase();
    if (stopWord.isStopWord(word)) {
        return "stop word";
    } else if (isDate(word)) {
        return 'date';
    } else if (isMealTime(word)) {
        return 'meal time';
    } else {
        return 'unknown';
    }
}

// Checking the value of "word"
const whichValue = (word) => {
    word = word.toLowerCase();
    if (stopWord.isStopWord(word)) {
        return word;
    } else if (isDate(word)) {
        return whichDay(word);
    } else if (isMealTime(word)) {
        return whichMeal(word);
    } else {
        return word;
    }
}

// Checking whether it's tomorrow, today, or yesterday
const whichDay = (day) => {
    if (day === "today" || day === "now" || day === "currently") {
        return moment();
    } else if (day === "yesterday") {
        return moment().add(-1, 'day').toDate();
    } else if (day === "tomorrow") {
        return moment().add(1, 'day').toDate();
    }
}

// Checking the value of meal
const whichMeal = (word) => {
    if (word === "morning" || word === "breakfast" || word === "brunch") {
        return "morning";
    } else if (word === "midday" || word === "mid day" || word === "lunch") {
        return "midday";
    } else if (word === "evening" || word === "dinner " || word === "supper") {
        return "evening";
    } else if (word === "anytime" || word === "snack") {
        return "anytime";
    }
}

// Checking whether it is a valid day
const isDate = (word) => {
    for (let i = 0; i < identifier.Dates.length; i++) {
        if (identifier.Dates[i].names.includes(word)) {
            return true;
        }
    }
    return false;
}

// Checking whether it is a meal time
const isMealTime = (word) => {
    for (let i = 0; i < identifier.MealTimes.length; i++) {
        if (identifier.MealTimes[i].names.includes(word)) {
            return true;
        }
    }
    return false;
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});