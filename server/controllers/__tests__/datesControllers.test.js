const controller = require('../datesController')

const parseIt = require('../../services/Parser')
const dateFixtures = require('../__fixtures__/dates')

jest.mock('../../services/Parser')


const res = {
    json: jest.fn()
}
const log = jest.spyOn(global.console, "log").mockImplementation(() => {})

beforeEach(() => {
    jest.resetAllMocks()
})

describe('date controller test suite', () => {
    const getDateMock = jest.fn()
    const getAllDatesMock = jest.fn()
    it('should return all dates if no date is provided', () => {
        const req = {query: {}}
        parseIt.mockImplementation(() => {
            return {
                getDate: getDateMock,
                getAllDates: getAllDatesMock.mockReturnValue(dateFixtures)
            }
        })

        controller(req, res)
        
        expect(getAllDatesMock).toBeCalledTimes(1)
        expect(getDateMock).not.toBeCalled()
        expect(res.json).toBeCalledWith({
            "data": dateFixtures,
            "status": "success"
        })
    })
    it('should get date matches', () => {
        const req = {query: {date: 'today'}}
        parseIt.mockImplementation(() => {
            return {
                getDate: getDateMock.mockReturnValue(dateFixtures),
                getAllDates: getAllDatesMock
            }
        })

        controller(req, res)
        
        expect(getAllDatesMock).not.toBeCalled()
        expect(getDateMock).toBeCalledWith('today')
        expect(res.json).toBeCalledWith({
            "data": dateFixtures,
            "status": "success"
        })
    })
    // it('should handle thrown error', () => {
    //     const req = {query: { }}
    //     const testError = new Error('TEST ERROR')
    //     parseIt.mockImplementation(() => {
    //         return {
    //             getDate: getDateMock,
    //             getAllDates: getAllDatesMock.mockImplementation(() => {throw testError})
    //         }
    //     })

    //     //controller(req, res)
        
    //    expect(() => {controller(req, res)}).toThrow()
    // })

    it('should handle console print error', () => {
        const req = {query: { }}
        const testError = new Error('TEST ERROR')
        parseIt.mockImplementation(() => {
            return {
                getDate: getDateMock,
                getAllDates: getAllDatesMock
            }
        })

        controller(req, res)
        
       expect(log).toBeCalled()
       log.mockRestore()
    })
})