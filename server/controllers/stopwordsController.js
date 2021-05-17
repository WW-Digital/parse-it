const stopwordParser = require('../services/Parser')

module.exports = (req, res) => {
    try{
        const parseIt = new stopwordParser()
        const { word } = req.query
        if(word) {
        const wordFound  = parseIt.getStopword(word)
        let data = wordFound
        if(data.length === 0){
            return res.json({status: 'failure', data})
        }
        return res.json({status: 'success', data})
        }
        const allStopwords = parseIt.getAllStopwords()
        let data = allStopwords 
        if(data.length === 0){
            return res.json({status: 'failure', data})
        }
        return res.json({status: 'success', data})
    }catch(err){
        throw err
    }
}

