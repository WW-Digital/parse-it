const mealtimeParser = require('../services/Parser')
const parseIt = new mealtimeParser()
const express = require('express');
const router = express.Router()

router.get('/mealtimes', (req, res) => {
    let status
    const allMealtimes = parseIt.getAllMealtimes()
    console.log(allMealtimes.length)
    try{
    if(res.statusCode !== 200 || allMealtimes.length < 1){
        status = 'failure'
    }else{
        status = 'success'
    }
    res.json({
        status,
        data: allMealtimes
    })
    }catch(err){
        console.log(err)
    }
})

module.exports = router