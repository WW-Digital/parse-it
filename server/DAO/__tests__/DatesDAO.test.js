const DateDAOClass = require('../DatesDAO')
const date = new DateDAOClass()
const dateFixtures = require('../__fixtures__/dates')
const { Dates } = require('../../models/Identifier')


describe('Data access getAllDates function test', () => {
    it('should return all dates array', () => {
        const dates = date.getAllDates()
        expect(dates).toEqual(Dates)
    })
})

describe('Data access getDate function test', () => {
    it('should return all matching dates given named param', () => {
    expect(date.getDate('currently')).toEqual(dateFixtures)
    })
})
