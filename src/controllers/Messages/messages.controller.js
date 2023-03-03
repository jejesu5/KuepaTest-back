const services = require('../../services/messages/messages.services')

/**
 * this function create a new message in the database
 * @param {*} req message, user, role
 * @param {*} res message created
 */

exports.createMessage = async (req, res) => {
    try {
        const {message, user, role} = req.body
        const newMessage = await services.createMessage(message, user, role);
        res.status(200).json({
            message: 'Message creado con exito',
            data: newMessage
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error creating message',
            error: error.message
        })
    }
}


exports.getAllMessages = async (req, res) => {
    try {
        let {skip, limit} = req.query
        skip = parseInt(skip)
        limit = parseInt(limit)

        const messages = await services.getAllMessages(skip, limit)

        res.status(200).json({
            message: 'Messages obtenidos con exito',
            data: messages
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error getting messages',
            error: error.message
        })
    }
}