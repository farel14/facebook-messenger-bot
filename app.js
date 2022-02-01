// Imports dependencies and set up http server
require('dotenv').config()

const
  express = require('express'),
  { urlencoded, json } = require('body-parser'),
  app = express()
  router = require('./routers')

// Parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }))

// Parse application/json.
app.use(json())

// Serving static files
app.use(express.static('public'));

// Implement express routing
app.use('/', router)
  
// Sets server port and logs message on success
app.listen(process.env.PORT || 3000, () => console.log('webhook is listening'));