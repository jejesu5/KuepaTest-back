const {Schema, model} = require('mongoose');

const RolesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});

module.exports = model('Roles', RolesSchema);