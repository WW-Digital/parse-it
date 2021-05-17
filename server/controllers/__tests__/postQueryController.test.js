const controller = require('../postQueryController')

const parseIt = require('../../services/Parser')
const postqueryFixtures = require('../__fixtures__/postQuery')
const dateFixtures = require('../__fixtures__/dates')
const mealtimeFixtures = require('../__fixtures__/mealtimes')
const stopwordFixtures = require('../__fixtures__/stopwords')
jest.mock('../../services/Parser')


const res = {
    json: jest.fn()
}

const log = jest.spyOn(global.console, "log").mockImplementation(() => {})

beforeEach(() => {
    jest.resetAllMocks()
})

describe('postquery controller test suite', ()=> {
    const getDateMock = jest.fn()
    const getMealtimeMock = jest.fn()
    const getStopwordMock = jest.fn()
    
    test('should get the values provided in the query', () => {
        const req = {query: {query: 'abc, not lunch today!' }}
        const newFixture = [
            {
              "matchedWord": "abc",
              "type": "unknown",
              "value": "abc"
            },
            {
              "matchedWord": "not",
              "type": "stopword",
              "value": "not"
            },
            {
              "matchedWord": "lunch",
              "type": "mealtime",
              "value": "midday"
            },
            {
              "matchedWord": "today",
              "type": "date",
              "value": "05/17/2021"
            }
          ]
        
        parseIt.mockImplementation(() => {
            return {
                getStopword: getStopwordMock,
                getDate: getDateMock,
                getMealtime: getMealtimeMock
            }
        
        })

        
        getDateMock
        .mockReturnValueOnce([])
        .mockReturnValueOnce([])
        .mockReturnValueOnce([])
        .mockReturnValueOnce([{ value: '05/17/2021', type: 'date' }])


        getMealtimeMock
        .mockReturnValueOnce([])
        .mockReturnValueOnce([])
        .mockReturnValueOnce([{ value: 'midday', type: 'mealtime' }])
        .mockReturnValueOnce([])

        getStopwordMock
        .mockReturnValueOnce([])
        .mockReturnValueOnce([{ value: 'not', type: 'stopword' }])
        .mockReturnValueOnce([])
        .mockReturnValueOnce([])
        
        
        controller(req, res)
 
        expect(getDateMock).toBeCalled()
        expect(getMealtimeMock).toBeCalled()
        expect(getStopwordMock).toBeCalled()
        expect(res.json).toBeCalledWith({
            "status": "success",
            "data": newFixture
        })
    })
    //     it('should handle thrown error', () => {
    //     const req = {query: { }}
    //     const testError = new Error('TEST ERROR')
    //     parseIt.mockImplementation(() => {
    //         throw testError
    //         // return {
    //         //     getDate: getDateMock.mockImplementation(() => {throw testError}),
    //         //     getMealtime: getMealtimeMock.mockImplementation(() => {throw testError}),
    //         //     getStopword: getStopwordMock.mockImplementation(() => {throw testError})
    //         // }
    //     })

    //     //controller(req, res)
        
    //    expect(() => {controller(req, res)}).toThrow()
    // })

    it('should handle console print error', () => {
        const req = {query: { query: 'today'}}
        parseIt.mockImplementation(() => {
            return {
                getDate: getDateMock,
                getMealtime: getMealtimeMock,
                getStopword: getStopwordMock
            }
        })

        controller(req, res)
        
       expect(log).toBeCalled()
       log.mockRestore()
    })
})
