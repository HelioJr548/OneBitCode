const API_URL = 'http://localhost:3000/transactions';

const fetchTransactions = async () => {
	const response = await fetch(API_URL);
	return await response.json();
};

const saveTransaction = async (transaction) => {
	const method = transaction.id ? 'PUT' : 'POST';
	const url = transaction.id ? `${API_URL}/${transaction.id}` : API_URL;

	const response = await fetch(url, {
		method,
		body: JSON.stringify(transaction),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return await response.json();
};

const deleteTransaction = async (id) => {
	await fetch(`${API_URL}/${id}`, {
		method: 'DELETE',
	});
};

export { fetchTransactions, saveTransaction, deleteTransaction };
