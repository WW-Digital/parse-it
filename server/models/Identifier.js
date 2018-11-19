const moment = require('moment');

const MealTimes = [
    {
        value: "morning",
        names: [
            "morning", "breakfast"
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
            "today"
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

module.exports.MealTimes = MealTimes;
module.exports.Dates = Dates;