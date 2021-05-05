const mealtimeParser = require('../services/Parser')
const parseIt = new mealtimeParser()
const express = require('express');
const router = express.Router()


router.get('/mealtime', (req, res) => {
    const name = req.query.name
    const value = parseIt.getMealtime(name)
    let status
    try{
    if(res.statusCode !== 200 || value.length < 1){
        status = 'failure'
    }else{
        status = 'success'
    }
    
    res.json({
        status,
        data: value
    })
    }catch(err){
        console.log(err)
    }
})

module.exports = router