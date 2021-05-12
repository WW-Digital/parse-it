const MealtimeDAOClass = require('../MealtimeDAO')
const meal = new MealtimeDAOClass()
const { MealTimes } = require('../../models/Identifier')

describe('Data access getAllMealtimes function test', () => {
    it.skip('should return all mealtimes array', () => {
        const mealtimes = meal.getAllMealtimes()
        expect(mealtimes).toEqual(MealTimes)
    })
})

describe('Data access getMealtime function test', () => {
    it.skip('should return all mealtimes matching given param', () => {
        const mealtimesArr = [{value: "morning", type: "mealtime"}, {value: "anytime", type: "mealtime"}]
        expect(meal.getMealtime("breakfast")).toEqual(mealtimesArr)
    })
})
