const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        number: Number,
        street: String,
        city: String,
        country : String
    },
    email: {
        required: true,
        type: String
    },
    phone: String,
    website: String,
    },{
        timestamps: true
    }
)

module.exports = mongoose.model('users', userSchema)


