const dateParser = require('../services/Parser')
const parseIt = new dateParser()
const express = require('express');
const { all } = require('./mealtimesRoutes');
const router = express.Router()


router.get('/dates', (req, res) => {
    let dateReturned
    try{
       const { date } = req.query
       if(date){
        dateReturned = parseIt.getDate(date)
       }
       const allDates = parseIt.getAllDates()
       let data = !dateReturned ? allDates : dateReturned
       
        if(data.length < 1){
           return res.json({
                status: 'failure',
                data
            })
        }else{
            return res.json({
                status: 'success',
                data
            })
        }
    }catch(err){
        console.log(err)
    }
})



module.exports = router
