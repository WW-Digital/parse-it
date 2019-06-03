const MealTimesClass = require('../MealTimes.js');
const MealTimesHelper = new MealTimesClass();

test('Checking all valid inputs', () => {
    expect(MealTimesHelper.findElementInMealTimes("morning")).toEqual({
        value: "morning",
        names: [
            "morning", "breakfast"
        ]
    });
    expect(MealTimesHelper.findElementInMealTimes("breakfast")).toEqual({
        value: "morning",
        names: [
            "morning", "breakfast"
        ]
    });
    expect(MealTimesHelper.findElementInMealTimes("midday")).toEqual({
        value: "midday",
        names: [
            "midday", "mid day", "lunch"
        ]
    });
    expect(MealTimesHelper.findElementInMealTimes("mid day")).toEqual({
        value: "midday",
        names: [
            "midday", "mid day", "lunch"
        ]
    });
    expect(MealTimesHelper.findElementInMealTimes("lunch")).toEqual({
        value: "midday",
        names: [
            "midday", "mid day", "lunch"
        ]
    });
    expect(MealTimesHelper.findElementInMealTimes("evening")).toEqual({
        value: "evening",
        names: [
            "evening", "dinner", "supper"
        ]
    });
    expect(MealTimesHelper.findElementInMealTimes("dinner")).toEqual({
        value: "evening",
        names: [
            "evening", "dinner", "supper"
        ]
    });
    expect(MealTimesHelper.findElementInMealTimes("supper")).toEqual({
        value: "evening",
        names: [
            "evening", "dinner", "supper"
        ]
    });
    expect(MealTimesHelper.findElementInMealTimes("anytime")).toEqual({
        value: "anytime",
        names: [
            "anytime", "snack"
        ]
    });
    expect(MealTimesHelper.findElementInMealTimes("snack")).toEqual({
        value: "anytime",
        names: [
            "anytime", "snack"
        ]
    });
});

test('Checking isDate ', () => {
    // "morning", "breakfast" "midday", "mid day", "lunch" "evening", "dinner", "supper" "anytime", "snack"
    expect(MealTimesHelper.isMealTimes("morning")).toBe(true);
    expect(MealTimesHelper.isMealTimes("breakfast")).toBe(true);
    expect(MealTimesHelper.isMealTimes("midday")).toBe(true);
    expect(MealTimesHelper.isMealTimes("mid day")).toBe(true);
    expect(MealTimesHelper.isMealTimes("lunch")).toBe(true);
    expect(MealTimesHelper.isMealTimes("evening")).toBe(true);
    expect(MealTimesHelper.isMealTimes("dinner")).toBe(true);
    expect(MealTimesHelper.isMealTimes("supper")).toBe(true);
    expect(MealTimesHelper.isMealTimes("anytime")).toBe(true);
    expect(MealTimesHelper.isMealTimes("snack")).toBe(true);

    expect(MealTimesHelper.isMealTimes("")).toBe(false);
});

test('Check response ', () => {
    expect(MealTimesHelper.outputJSON("morning")).toEqual({
        status: 'success',
        data: [{
            value: "morning",
            type: 'meal time',
        }],
    });
    expect(MealTimesHelper.outputJSON("lunch")).toEqual({
        status: 'success',
        data: [{
            value: "midday",
            type: 'meal time',
        }],
    });
    expect(MealTimesHelper.outputJSON("evening")).toEqual({
        status: 'success',
        data: [{
            value: "evening",
            type: 'meal time',
        }],
    });
})



