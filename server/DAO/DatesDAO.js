const { Dates } = require('../models/Identifier')

class DatesDAO  {


getAllDates = () => Dates

getDate = (name) => {
let timeFound =  Dates.find(ele => ele.names.includes(name.toLowerCase()) ? ele.value : null)
    return timeFound ? [{ value: timeFound.value, type: 'date'}] : [] 
}

}
module.exports = DatesDAO 
