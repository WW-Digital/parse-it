const {MealTimes} = require('../models/Identifier')

class MealtimeDAO {


getAllMealtimes = () => MealTimes

getMealtime = (type) => {
    let mealtimeFound
    MealTimes.forEach(ele => {
        if(ele.names.includes(type.toLowerCase())){
              mealtimeFound = ele.value
        }
    })
    return mealtimeFound ? [{value: mealtimeFound, type: "mealtime"}] : []
}
}

module.exports = MealtimeDAO