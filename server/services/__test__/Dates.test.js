const DatesClass = require('../Dates.js');
const moment = require('moment');
const DatesHelper = new DatesClass();

test('Checking all valid inputs', () => {
    expect(DatesHelper.findElementInDates("today")).toEqual({
        value: moment().format("MM-DD-YYYY"),
        names: [
            "today"
        ]
    });
    expect(DatesHelper.findElementInDates("yesterday")).toEqual({
        value: moment().add(-1, 'day').format("MM-DD-YYYY"),
        names: [
            "yesterday"
        ]
    });
    expect(DatesHelper.findElementInDates("tomorrow")).toEqual({
        value: moment().add(1, 'day').format("MM-DD-YYYY"),
        names: [
            "tomorrow"
        ]
    });
});

test('Checking isDate ', () => {
    expect(DatesHelper.isDates("today")).toBe(true);
    expect(DatesHelper.isDates("yesterday")).toBe(true);
    expect(DatesHelper.isDates("tomorrow")).toBe(true);
    expect(DatesHelper.isDates("")).toBe(false);
});

test('Check response ', () => {
    expect(DatesHelper.outputJSON("today")).toEqual({
        status: 'success',
        data: [{
            value: moment().format("MM-DD-YYYY"),
            type: 'dates',
        }],
    });

    expect(DatesHelper.outputJSON("yesterday")).toEqual({
        status: 'success',
        data: [{
            value: moment().add(-1, 'day').format("MM-DD-YYYY"),
            type: 'dates',
        }],
    });
    
    expect(DatesHelper.outputJSON("tomorrow")).toEqual({
        status: 'success',
        data: [{
            value: moment().add(1, 'day').format("MM-DD-YYYY"),
            type: 'dates',
        }],
    });

    expect(DatesHelper.outputJSON("")).toEqual({
        status: 'failure',
        data: [{
            value: '',
            type: 'unknown',
        }],
    });
});



