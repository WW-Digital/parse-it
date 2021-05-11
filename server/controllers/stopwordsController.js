const stopwordParser = require('../services/Parser')
const parseIt = new stopwordParser()

module.exports = ('/', (req, res) => {
    let wordFound
    try{
        const { word } = req.query
        if(word) {
         wordFound  = parseIt.getStopword(word)
        }
        const allStopwords = parseIt.getAllStopwords()
        let data = !wordFound ? allStopwords : wordFound   
        if(data.length === 0){
            return res.json({status: 'failure', data})
        }
        return res.json({status: 'success', data})
    }catch(err){
        console.log(err)
    }
})

