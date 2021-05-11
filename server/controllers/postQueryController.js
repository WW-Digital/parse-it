const Parser = require('../services/Parser')
const parseIt = new Parser()

module.exports = ('/', async (req, res) => {
    const regex = /[^0-9a-z\s]/ig
    try{
    const { query } = req.query
    const queryArr = query.replace(regex, '').split(' ')
    const data = []
    for(let i = 0; i < queryArr.length; i++) {
        const dateVal = await parseIt.getDate(queryArr[i])
        const mealtimeVal = await parseIt.getMealtime(queryArr[i])
        const stopwordVal = await parseIt.getStopword(queryArr[i])
    
        const result = await Promise.allSettled([dateVal, mealtimeVal, stopwordVal])
        
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
    return res.json({
        data
    })
    }catch(err) {
        console.log(err)
    } 
})


