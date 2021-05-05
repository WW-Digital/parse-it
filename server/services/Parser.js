const {MealTimes, Dates} = require('../models/Identifier');
const stopWordList = require('../models/StopWord');
class Parser {
    //TODO Parse through and identify all StopWords & Identifiers

 getAllMealtimes = () => {
    return MealTimes
   }
 getAllDates = () => {
     return Dates
 }
 getAllStopwords = () => {
     return stopWordList
 }
 getStopword = (word) => {
  const wordFound = stopWordList.find(ele => ele === word)
  if(wordFound === undefined){
      return []
  }
  return [{value: wordFound, type: "stopword"} ]
 }
 getMealtime = (type) => {
     let mealtimeFound
     MealTimes.forEach(ele => {
         if(ele.names.includes(type)){
               mealtimeFound = ele.value
         }
     })
     if(mealtimeFound === undefined){
         return []
     }
     return [{value: mealtimeFound, type: "mealtime"}]
 }
}
const p = new Parser();
// console.log(p.getAllMealtimes())
// console.log(p.getAllDates())
// console.log(p.getAllStopwords())
// console.log(p.getStopword('the'))
// console.log(p.getMealtime('breakfas'))
module.exports = Parser;

