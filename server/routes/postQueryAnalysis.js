const stopwordParser = require('../services/Parser')
const parseIt = new stopwordParser()
const express = require('express');
const router = express.Router()

let regex = /[^0-9a-z\s]/ig

router.post('/', (req, res) => {
    try{
    let { query } = req.query
    let queryArr = query.replace(regex, '').split(' ')
    let data = []


    for(let i = 0; i < queryArr.length; i++) {
       let dateVal = parseIt.getDate(queryArr[i])
       let mealtimeVal = parseIt.getMealtime(queryArr[i])
       let stopwordVal = parseIt.getStopword(queryArr[i])
       
        if(dateVal.length > 0){
            let dateValues = dateVal[0]
            data.push({matchedWord: queryArr[i], type: dateValues.type, value: dateValues.value})
            
        }
        if(mealtimeVal.length > 0){
            let mealtimeValues = mealtimeVal[0]
            data.push({matchedWord: queryArr[i], type: mealtimeValues.type, value: mealtimeValues.value})
            
        }
         if(stopwordVal.length > 0){
            let stopwordValues = stopwordVal[0]
            data.push({matchedWord: queryArr[i], type: stopwordValues.type, value: stopwordValues.value})
            
        }else{
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

module.exports = router
