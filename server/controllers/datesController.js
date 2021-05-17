const dateParser = require('../services/Parser')

module.exports = (req, res) => {
    try{
       const parseIt = new dateParser()
       const { date } = req.query
       if(date){
        const dateReturned = parseIt.getDate(date)
        let data = dateReturned
        if(data.length === 0){
            return res.json({status: 'failure', data})
         }
            return res.json({status: 'success', data})
       }
       const allDates = parseIt.getAllDates()
       let data = allDates
        if(data.length === 0){
           return res.json({status: 'failure', data})
        }
        return res.json({status: 'success', data})
        
    }catch(err){
        console.log(err)
    }
}


