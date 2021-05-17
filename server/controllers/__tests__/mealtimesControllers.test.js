const controller = require('../mealtimesController')

const parseIt = require('../../services/Parser')
const mealtimeFixtures = require('../__fixtures__/mealtimes')
jest.mock('../../services/Parser')

//MOCK res.json()
const res = {
    json: jest.fn()
}

//Spy on console.log()
const log = jest.spyOn(global.console, "log").mockImplementation(() => {})

beforeEach(() => {
    jest.resetAllMocks()
})

describe('mealtime controller test suite', ()=> {
    const getMealtimeMock = jest.fn()
    const getAllMealtimesMock = jest.fn()
    
    it('should return all mealtimes if no mealtime provided', () => {
        
        const req = {query: {}}
        parseIt.mockImplementation(() => {
            return {
                getMealtime: getMealtimeMock,
                getAllMealtimes: getAllMealtimesMock.mockReturnValue(mealtimeFixtures)
            }
        })

        controller(req, res)
        
        expect(getAllMealtimesMock).toBeCalledTimes(1)
        expect(getMealtimeMock).not.toBeCalled()
        expect(res.json).toBeCalledWith({
            "status": "success",
            "data": mealtimeFixtures
        })
    })

    it('should get mealtime matches', () => {
        const req = {query: {name: 'breakfast'}}
        parseIt.mockImplementation(() => {
            return {
                getMealtime: getMealtimeMock.mockReturnValue(mealtimeFixtures),
                getAllMealtimes: getAllMealtimesMock
            }
        })
        controller(req, res)

        expect(getAllMealtimesMock).not.toBeCalled()
        expect(getMealtimeMock).toBeCalledWith('breakfast')
        expect(res.json).toBeCalledWith({
            "status": "success",
            "data": mealtimeFixtures
        })
    })
    // it('should handle thrown error', () => {
    //     const req = {query: { }}
    //     const testError = new Error('TEST ERROR')
    //     parseIt.mockImplementation(() => {
    //         return {
    //             getMealtime: getMealtimeMock,
    //             getAllMealtimes: getAllMealtimesMock.mockImplementation(() => {throw testError})
    //         }
    //     })
        
    //     expect(() => {controller(req, res)}).toThrow()
    // })

    it('should handle console print error', () => {
        const req = {query: { }}
        const testError = new Error('TEST ERROR')
        parseIt.mockImplementation(() => {
            return {
                getMealtime: getMealtimeMock,
                getAllMealtimes: getAllMealtimesMock
            }
        })

        controller(req, res)
        
        expect(log).toBeCalled()
        log.mockRestore()
    })
})