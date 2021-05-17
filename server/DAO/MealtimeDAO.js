const {MealTimes} = require('../models/Identifier')

class MealtimeDAO {
    getAllMealtimes = () => MealTimes

    getMealtime = (type) => {
        //RETURN SINGLE VALUE
    //     const formattedType = type.toLowerCase();
    //     for(const mealTime of MealTimes){
    //         if(mealTime.names.includes(formattedType)){
    //             return  [{value: mealTime.value, type: "mealtime"}]
    //         }
    //     }
    //     return []
    // }

    //RETURN MULTIPLE VALUES
    const formatMealTime = mealTime => { return {value: mealTime.value, type: "mealtime"}}
    const matchingMealTimes = MealTimes.filter(mealTime => {
    const formattedType = type.toLowerCase();
    return mealTime.names.includes(formattedType);
    })
    if (!matchingMealTimes) {
        return []
    }
  
    return matchingMealTimes.map(formatMealTime);
    }
}

module.exports = MealtimeDAO
