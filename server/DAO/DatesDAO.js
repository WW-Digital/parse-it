const { Dates } = require('../models/Identifier')

class DatesDAO  {


getAllDates = () => Dates

getDate = (name) => {
    //RETURN SINGLE VALUE
    // const formattedName = name.toLowerCase();
    // for(const date of Dates){
    //   if(date.names.includes(formattedName)){
    //       return [{value: date.value, type: "date"}]
    //   }  
    // }
    // return []

    //RETURN MULTIPLE VALUES
    const formatDate = date => {return {value: date.value, type: "date"}}
    const matchingDates = Dates.filter(date => {
        const formattedName = name.toLowerCase()
        return date.names.includes(formattedName)
    })
    if(!matchingDates) {
        return []
    }
    return matchingDates.map(formatDate)

    
}
    
}
module.exports = DatesDAO 
