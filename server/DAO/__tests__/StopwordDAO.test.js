const StopwordDAOClass = require('../StopwordDAO')
const stopWordList = require('../../models/StopWord')
const stopword = new StopwordDAOClass()


describe('Data access getAllStopwords function test', () => {
    it('should return all stopwords array', () => {
        const stopwords = stopword.getAllStopwords()
        expect(stopwords).toEqual(stopWordList)
    })
})

describe('Data access getStopword function test', () => {
    it('should return all stopwords matching given param ', () => {
        const stopwordsArr = [{value: 'on', type: 'stopword'}, {value: 'on', type: 'stopword'}]
        expect(stopword.getStopword('on')).toEqual(stopwordsArr)
    })
    
})