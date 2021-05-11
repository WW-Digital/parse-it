const mealtimeParser = require('../services/Parser')
const parseIt = new mealtimeParser()

module.exports = ('/', (req, res) => {
    let value
    try{
        const { name } = req.query
        if(name){
            value = parseIt.getMealtime(name)
    }
    const allMealtimes = parseIt.getAllMealtimes()
    let data = !value ? allMealtimes : value
    if(data.length === 0){
        return res.json({status: 'failure', data})
    }
    return res.json({status: 'success', data})

    }catch(err){
        console.log(err)
    }
})


