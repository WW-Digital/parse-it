const moment = require('moment');

const MealTimes = [
    {
        value: "morning",
        names: [
            "morning", "breakfast", "brunch"
        ]
    },
    {
        value: "midday",
        names: [
            "midday", "mid day", "lunch"
        ]
    },
    {
        value: "evening",
        names: [
            "evening", "dinner", "supper"
        ]
    },
    {
        value: "anytime",
        names: [
            "anytime", "snack"
        ]
    }
];

const Dates = [
    {
        value: moment(),
        names: [
            "today", "now", "currently"
        ]
    },
    {
        value: moment().add(-1, 'day').toDate(),
        names: [
            "yesterday"
        ]
    },
    {
        value: moment().add(1, 'day').toDate(),
        names: [
            "tomorrow"
        ]
    },
];

module.exports = {MealTimes, Dates};
