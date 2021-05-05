const mealtimeParser = require('../services/Parser')
const parseIt = new mealtimeParser()
const express = require('express');
const router = express.Router()

router.get('/stopword', (req, res) => {
    const word = req.query.word
    const wordFound = parseIt.getStopword(word)
    let status
    try{
    if(res.statusCode !== 200 || wordFound.length < 1){
        status = 'failure'
    }else{
        status = 'success'
    }
    
    res.json({
        status,
        data: wordFound
    })
    }catch(err){
        console.log(err)
    }
})
module.exports = router