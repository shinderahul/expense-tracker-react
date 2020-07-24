const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
	text: {
		type: String,
		trim: true,
		required: [true, 'Please add some text'],
	},
	amount: {
		type: Number,
		required: [true, 'Please add a prositive or negetive number'],
	},
	createAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Transaction', TransactionSchema);
