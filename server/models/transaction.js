var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Transaction Model

var transactionSchema = new Schema({
    transaction_id: { type: Number, required: true },
    vendor : { type: String, required: true },
    amount : { type: Number},
    vendor_address1: { type: String, required: true },
    vendor_address2: { type: String, required: false },
    vendor_city: { type: String, required: true },
    vendor_postalcode: { type: String, required: true }
});

var Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = { Transaction: Transaction }