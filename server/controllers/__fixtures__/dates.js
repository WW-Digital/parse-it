const moment = require('moment')

module.exports = [
    {
        "status": "success",
        "data": [
          {
            "value": moment().format("L"),
            "names": [
              "today",
              "now",
              "currently"
            ]
          },
          {
            "value": moment().add(-1, 'day').format("L"),
            "names": [
              "yesterday"
            ]
          },
          {
            "value": moment().add(1, 'day').format("L"),
            "names": [
              "tomorrow",
              "currently"
            ]
          }
        ]
      }
         
]