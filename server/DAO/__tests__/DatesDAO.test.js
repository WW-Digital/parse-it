const DateDAOClass = require('../DatesDAO')
const date = new DateDAOClass()
const { Dates } = require('../../models/Identifier')


describe('Data access getAllDates function test', () => {
    it('should return all dates array', () => {
        const dates = date.getAllDates()
        expect(dates).toEqual(Dates)
    })
})

describe('Data access getDate function test', () => {
    it('should return all matching dates given named param', () => {
        const dateArr = [    {
            "value": "05/11/2021",
            "type": "date"
          },
          {
            "value": "05/12/2021",
            "type": "date"
          }]
    expect(date.getDate('currently')).toEqual(dateArr)
    })
})
