const 
  express = require('express')
  summary = express.Router()
  fs = require('fs')

// GET /summary
summary.get('/', (req, res) => {  

  // without db, reading from file
  const data = fs.readFileSync('data/summary.json')
  const jsonData = JSON.parse(data)
  res.json(jsonData)
})


module.exports = summary