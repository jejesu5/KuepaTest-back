const db = require('../../models/index')
const Message = db.message
const User = db.user


exports.createMessage = async (message, user, role) => {
    try {
        const newMessage = new Message({
        message,
        user,
        role,
        })
    
        await newMessage.save()

        
        await User.findByIdAndUpdate(user, {$push: {messages_sent: newMessage._id}})
    
        return newMessage
    
    } catch (error) {
        throw new Error(error)
    }
    }

exports.getAllMessages = async (skip, limit) => {
    try {

        const messages = await Message.find().skip(skip).limit(limit)

        return messages

    } catch (error) {
        throw new Error(error)
    }
}