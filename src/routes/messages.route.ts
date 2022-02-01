import express from 'express'
import { Message } from '../controllers/messages.controller'
const messages = express.Router()

// GET /messages
messages.get('/', Message.getHelloWorld)

// GET /messages/:id
messages.get('/:id', Message.getMessageId)

export default messages
