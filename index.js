// Imports dependencies and set up http server

const router = require('./routers');
require('dotenv').config()

const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json()).use(bodyParser.urlencoded({extended:true})); // creates express http server
  
// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));