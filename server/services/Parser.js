const DatesDAO = require('../dao/DatesDAO')
const MealtimeDAO = require('../dao/MealtimeDAO')
const StopwordDAO = require('../dao/StopwordDAO')


class Parser {
    //TODO Parse through and identify all StopWords & Identifiers
   
    //Dates Functions
    datesdao = new DatesDAO()
    getAllDates = () => this.datesdao.getAllDates()
    getDate = (time) => this.datesdao.getDate(time)

    //Mealtime Functions
    mealtimedao = new MealtimeDAO()
     getAllMealtimes = () => this.mealtimedao.getAllMealtimes()
     getMealtime = (type) => this.mealtimedao.getMealtime(type)

    //Stopword Functions
    stopworddao = new StopwordDAO()
    getAllStopwords = () => this.stopworddao.getAllStopwords()
    getStopword = (word) => this.stopworddao.getStopword(word)
}

module.exports = Parser;

