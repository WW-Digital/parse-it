const mealtimeParser = require('../services/Parser')
const parseIt = new mealtimeParser()
const express = require('express');
const router = express.Router()

router.get('/dates', (req, res) => {
    let status
    const allDates = parseIt.getAllDates()
    try{
    if(res.statusCode !== 200 || allDates.length < 1){
        status = 'failure'
    }else{
        status = 'success'
    }
    
    res.json({
        status,
        data: allDates
    })
    }catch(err){
        console.log(err)
    }
})

module.exports = router