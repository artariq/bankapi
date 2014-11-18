var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Branch Model

var branchSchema = new Schema({
    branch_id : { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String, required: false },
    city: { type: String, required: true },
    postalcode: { type: String, required: true }
});

// Account Model

var accountSchema = new Schema({
    account_id: { type: Number, required: true },
    account_type: { type: String, required: true },
    balance: { type: Number, required: true },
    credit_limit: { type: Number, required: false },
    branch_id: [branchSchema]
});

var Branch = mongoose.model('Branch', branchSchema);
var Account = mongoose.model('Account', accountSchema);

module.exports = { Branch: Branch }
module.exports = { Account: Account }