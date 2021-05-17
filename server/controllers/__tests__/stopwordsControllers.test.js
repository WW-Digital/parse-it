const controller = require('../stopwordsController')

const parseIt = require('../../services/Parser')
const stopWordFixtures = require('../__fixtures__/stopwords')
jest.mock('../../services/Parser')


const res = {
    json: jest.fn()
}

const log = jest.spyOn(global.console, "log").mockImplementation(() => {})

beforeEach(() => {
    jest.resetAllMocks()
})

describe('stopwords controller test suite', ()=> {
    const getStopwordMock = jest.fn()
    const getAllStopwordsMock = jest.fn()
    it('should return all stopwords if no stopword provided', () => {
        const req = {query: {}}
        parseIt.mockImplementation(() => {
            return {
                getStopword: getStopwordMock,
                getAllStopwords: getAllStopwordsMock.mockReturnValue(stopWordFixtures)
            }
        })
        controller(req, res)
        expect(getAllStopwordsMock).toBeCalledTimes(1)
        expect(getStopwordMock).not.toBeCalled()
        expect(res.json).toBeCalledWith({
            "status": "success",
            "data": stopWordFixtures
        })
    })
    it('should get mealtime matches', () => {
        const req = {query: { word: 'on'}}
        parseIt.mockImplementation(() => {
            return {
                getStopword: getStopwordMock.mockReturnValue(stopWordFixtures),
                getAllStopwords: getAllStopwordsMock
            }
        })
        controller(req, res)
        expect(getAllStopwordsMock).not.toBeCalled()
        expect(getStopwordMock).toBeCalledWith('on')
        expect(res.json).toBeCalledWith({
            "status": "success",
            "data": stopWordFixtures
        })
    })
        it('should handle thrown error', () => {
        const req = {query: { }}
        const testError = new Error('TEST ERROR')
        parseIt.mockImplementation(() => {
            return {
               getStopword: getStopwordMock,
                getAllStopwords: getAllStopwordsMock.mockImplementation(() => {throw testError})
            }
        })
        
        expect(() => {controller(req, res)}).toThrow()
    })
    // it('should handle console print error', () => {
    //     const req = {query: { }}
    //     const testError = new Error('TEST ERROR')
    //     parseIt.mockImplementation(() => {
    //         return {
    //             getStopword: getStopwordMock,
    //             getAllStopwords: getAllStopwordsMock
    //         }
    //     })

    //     controller(req, res)
        
    //     expect(log).toBeCalled()
    //     log.mockRestore()
    // })
})