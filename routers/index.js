// Import all the routes
const express = require('express')
const messages = require('./messages')
const summary = require('./summary ')
const router = express.Router()
const webhook = require('./webhook')

// Main route
router.get('/', (req, res) => {
    return res.send('Hello World!')
})

// Routes
router.use('/webhook', webhook)
router.use('/messages', messages)
router.use('/summary', summary)

module.exports = router
