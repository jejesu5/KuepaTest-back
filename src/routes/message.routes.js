const messageController = require('../controllers/Messages/messages.controller')
const router = require('express').Router()

// create a new message
router.post('/create', messageController.createMessage)

// get all messages

router.get('/all', messageController.getAllMessages)

module.exports = router