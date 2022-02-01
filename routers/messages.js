const express = require('express')
const messages = express.Router()

// GET /messages
messages.get('/', (req, res) => {  
  res.send('Hello World! from messages route')
})

// GET /messages/:id
messages.get('/:id', (req, res) => {  
  const messageId = req.params.id
  res.send(`Messages with ID ${messageId} received`)
})


module.exports = messages
