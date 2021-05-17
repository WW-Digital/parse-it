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
        const req = {query: {query: 'This is it i am not on lunch today!' }}
        parseIt.mockImplementation(() => {
            return {
                getDate: getDateMock.mockReturnValue(dateFixtures),
                getMealtime: getMealtimeMock.mockReturnValue(mealtimeFixtures),
                getStopword: getStopwordMock.mockReturnValue(stopwordFixtures)
            }
        })
        
        controller(req, res)

        expect(getDateMock).toBeCalledTimes(9)
        expect(getMealtimeMock).toBeCalledTimes(9)
        expect(getStopwordMock).toBeCalledTimes(9)
        expect(res.json).toBeCalledWith({
            "status": "success",
            "data": postqueryFixtures 
        })
    })
})