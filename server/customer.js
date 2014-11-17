var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Customer Model

var customerSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    customer_id: { type: Number, required: true },
    account_num: { type: Number, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: false},
    address1: { type: String. required: true},
    address2: { type: String. required: false},
    city: { type: String. required: true},
    postalcode: { type: String, required: true},
    dob: { type: Date, required: true}
});

module.exports = mongoose.model('Customer', customerSchema);