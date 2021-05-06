const stopwordParser = require('../services/Parser')
const parseIt = new stopwordParser()
const express = require('express');
const router = express.Router()


router.get('/stopwords', (req, res) => {
    let wordFound
    try{
        const { word } = req.query
        if(word) {
         wordFound  = parseIt.getStopword(word)
        }
        const allStopwords = parseIt.getAllStopwords()
        let data = !wordFound ? allStopwords : wordFound   
    if(data.length < 1){
        res.json({
            status: 'failure',
            data
        })
    }else{
        res.json({
            status: 'success',
            data
        })
    }
    }catch(err){
        console.log(err)
    }
})
module.exports = router
