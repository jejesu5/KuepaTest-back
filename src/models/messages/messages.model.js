const {Schema, model} = require('mongoose');


const messageSchema = new Schema({
    message: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    })

module.exports = model('Message', messageSchema);