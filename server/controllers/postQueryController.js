const Parser = require('../services/Parser')

module.exports = (req, res) => {
    const regex = /[^0-9a-z\s]/ig
    try{
        const parseIt = new Parser()
       
        const { query } = req.query
        if(!query){
            return res.json({
                status: "failure",
                data: []
            })
        }
        const queryArr = query.replace(regex, '').split(' ')
        const data = []
        for(let i = 0; i < queryArr.length; i++) {
            const dateVal = parseIt.getDate(queryArr[i])
            const mealtimeVal = parseIt.getMealtime(queryArr[i])
            const stopwordVal = parseIt.getStopword(queryArr[i])
        
            // const result = await Promise.allSettled([dateVal, mealtimeVal, stopwordVal])
            
            if(dateVal.length > 0){
                dateVal.forEach(date => {
                    data.push({matchedWord: queryArr[i], type: date.type, value: date.value})
                })
            }
            if(mealtimeVal.length > 0){
                mealtimeVal.forEach(mealtime => {
                    data.push({matchedWord: queryArr[i], type: mealtime.type, value: mealtime.value})
                })
            }
                if(stopwordVal.length > 0){
                stopwordVal.forEach(stopword => {
                    data.push({matchedWord: queryArr[i], type: stopword.type, value: stopword.value})
                })
            }
            if(dateVal.length === 0 && mealtimeVal.length === 0 && stopwordVal.length === 0){
                data.push({matchedWord: queryArr[i], type: 'unknown', value: queryArr[i].toLowerCase()})
            }
        }
        if(data.length === 0){
            return res.json({
                status: "failure",
                data
            })
        }
        return res.json({
            status: "success",
            data
        })
       
    }catch(err) {
        console.log(err)
    } 
}


