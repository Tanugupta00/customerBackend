const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Gold', 'Diamond'],
        required: true
    },
    membershipID: {
        type: mongoose.Schema.ObjectId,
        ref: 'membership',
    }

},
    {
        timestamps: true
    })

const customer = mongoose.model('customer', customerSchema);
module.exports = customer;