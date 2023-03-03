const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}

db.mongoose = mongoose

db.roles = require('./Users/Roles.model')
db.user = require('./Users/Users.model')
db.message = require('./messages/messages.model')

module.exports = db
