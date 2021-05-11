const dateParser = require('../services/Parser')
const parseIt = new dateParser()

module.exports = ('/', (req, res) => {
    let dateReturned
    try{
       const { date } = req.query
       if(date){
        dateReturned = parseIt.getDate(date)
       }
       const allDates = parseIt.getAllDates()
       let data = !dateReturned ? allDates : dateReturned
       
        if(data.length === 0){
           return res.json({status: 'failure', data})
        }
        return res.json({status: 'success', data})
        
    }catch(err){
        console.log(err)
    }
})


