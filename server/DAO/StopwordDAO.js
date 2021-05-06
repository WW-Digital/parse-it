const  stopWordList  = require('../models/StopWord')

class StopwordDAO {


getAllStopwords = () => stopWordList


getStopword = (word) => {
    const wordFound = stopWordList.find(ele => ele === word.toLowerCase())
    
    return wordFound ? [{value: wordFound, type: "stopword"} ] : []
   }
}
module.exports = StopwordDAO
