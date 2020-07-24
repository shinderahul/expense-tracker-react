export default (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'GET_TRANSACTION':
			return {
				...state,
				loading: false,
				transactions: payload,
			};

		case 'DELETE_TRANSACTION':
			return {
				...state,
				transactions: state.transactions.filter(
					(transaction) => transaction._id !== payload
				),
			};
		case 'ADD_TRANSACTION':
			return {
				...state,
				transactions: [...state.transactions, payload],
			};
		case 'TRANSACTION_ERROR':
			return {
				...state,
				error: payload,
			};
		default:
			return state;
	}
};
