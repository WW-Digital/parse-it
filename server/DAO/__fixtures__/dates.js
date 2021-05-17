const moment = require('moment');

module.exports = [
    {
    value: moment().format("L"),
    type: "date"
},

{
    value: moment().add(1, 'day').format("L"),
    type: "date"
}
]
