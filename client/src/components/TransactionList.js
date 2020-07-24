import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
	const { transactions, getTransaction } = useContext(GlobalContext);

	useEffect(() => {
		getTransaction();
	}, []);

	return (
		<div>
			<h3>History</h3>
			<ul id='list' className='list'>
				{transactions.map((transaction) => (
					<Transaction key={transaction._id} transaction={transaction} />
				))}
			</ul>
		</div>
	);
};

export default TransactionList;
