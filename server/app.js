const express = require('express');
const mealtimeParser = require('./services/Parser')
const app = express();
const parseIt = new mealtimeParser()
const PORT = process.env.PORT || 3000;
//TODO: Add an express router
const router = express.Router()
app.get('/mealtimes', (req, res) => {
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
app.get('/dates', (req, res) => {
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
app.get('/stopwords', (req, res) => {
    let status
    const allStopwords = parseIt.getAllStopwords()
    try{
    if(res.statusCode !== 200 || allStopwords.length < 1){
        status = 'failure'
    }else{
        status = 'success'
    }
    const allStopwords = parseIt.getAllStopwords()
    res.json({
        status,
        data: allStopwords
    })
    }catch(err){
        console.log(err)
    }
})

app.get('/stopword', (req, res) => {
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
app.get('/mealtime', (req, res) => {
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
app.listen(PORT, 'localhost')