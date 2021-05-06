const mealtimeParser = require('../services/Parser')
const parseIt = new mealtimeParser()
const express = require('express');
const router = express.Router()

router.get('/mealtimes', (req, res) => {
    let value
    try{
        const { name } = req.query
        if(name){
            value = parseIt.getMealtime(name)
    }
    const allMealtimes = parseIt.getAllMealtimes()
    let data = !value ? allMealtimes : value
    if(data.length < 1){
        return  res.json({
            status: 'failure',
            data
        })
    }else{
        return  res.json({
            status: 'success',
            data
        })
    }
    
   
    }catch(err){
        console.log(err)
    }
})


module.exports = router
