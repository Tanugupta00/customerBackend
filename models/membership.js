const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const membershipSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    
},
    {
        timestamps: true
    })

const membership = mongoose.model('membership', membershipSchema);
module.exports = membership;