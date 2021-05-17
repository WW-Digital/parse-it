const  stopWordList  = require('../models/StopWord')

class StopwordDAO {


getAllStopwords = () => stopWordList


getStopword = (word) => {
    //RETURN SINGLE VALUE
//    const formattedWord = word.toLowerCase()
//    for(const word of stopWordList){
//        if(word === formattedWord){
//            return [{value: word, type: "stopword" }]
//     }
//    }
//    return []
    //RETURN MULTIPLE VALUES{"
    const formatStopword = stopWord => {return {value: stopWord, type: "stopword"}}
    const matchingStopwords = stopWordList.filter(stopword => {
        const formattedWord = word.toLowerCase()
        return stopword === formattedWord
    })
    if(!matchingStopwords) {
        return []
    }
   
    return matchingStopwords.map(formatStopword)
   }
}
module.exports = StopwordDAO
