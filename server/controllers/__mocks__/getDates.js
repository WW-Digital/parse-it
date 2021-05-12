const axios = require('axios')
const { response } = require('express')
const fetch = require('node-fetch')

 function getDates() {
   axios.get('http://localhost:3000/dates/?date=currently')
    .then(response => response.data)
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

getDates()
module.exports = {getDates}