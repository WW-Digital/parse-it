const mealtimeParser = require('../services/Parser')

module.exports = (req, res) => {
    try{
        const parseIt = new mealtimeParser()
        const { name } = req.query
        if(name){
          const value = parseIt.getMealtime(name)
          let data = value
          if(data.length === 0){
            return res.json({status: 'failure', data})
          }
            return res.json({status: 'success', data})
        }
      const allMealtimes = parseIt.getAllMealtimes()
      let data = allMealtimes
     if(data.length === 0){
        return res.json({status: 'failure', data})
     }
     return res.json({status: 'success', data})

    }catch(err){
      console.log(err)
    }
}


