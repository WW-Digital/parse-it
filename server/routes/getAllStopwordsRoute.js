const mealtimeParser = require('../services/Parser')
const parseIt = new mealtimeParser()
const express = require('express');
const router = express.Router()


router.get('/stopwords', (req, res) => {
    let status
    const allStopwords = parseIt.getAllStopwords()
    try{
    if(res.statusCode !== 200 || allStopwords.length < 1){
        status = 'failure'
    }else{
        status = 'success'
    }
    res.json({
        status,
        data: allStopwords
    })
    }catch(err){
        console.log(err)
    }
})
module.exports = router