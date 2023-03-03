const {Schema, model, default: mongoose} = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    }, 
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    user_type: {
        type: Schema.Types.ObjectId,
        ref: 'Roles',
    },
    messages_sent : [{
        type: Schema.Types.ObjectId,
        ref: 'Message',
    }],
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('Users', UserSchema);
