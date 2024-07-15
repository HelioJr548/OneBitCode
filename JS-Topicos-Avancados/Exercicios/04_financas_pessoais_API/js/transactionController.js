import {
	fetchTransactions,
	saveTransaction,
	deleteTransaction,
} from './transactionService.js';
import { renderTransaction, updateBalance } from './transactionView.js';

let transactions = [];

const editTransaction = (transaction) => {
	document.querySelector('#id').value = transaction.id;
	document.querySelector('#name').value = transaction.name;
	document.querySelector('#amount').value = transaction.amount;
};

const deleteTransactionCallback = async (id, deleteBtn) => {
	await deleteTransaction(id);
	deleteBtn.parentElement.remove();
	transactions = transactions.filter((t) => t.id !== id);
	updateBalance(transactions);
};

const saveTransactionCallback = async (ev) => {
	ev.preventDefault();

	const id = document.querySelector('#id').value;
	const name = document.querySelector('#name').value;
	const amount = parseFloat(document.querySelector('#amount').value);

	const transaction = { id, name, amount };
	const savedTransaction = await saveTransaction(transaction);

	if (id) {
		transactions = transactions.map((t) =>
			t.id === id ? savedTransaction : t
		);
		document.querySelector(`#transaction-${id}`).remove();
	} else {
		transactions.push(savedTransaction);
	}

	renderTransaction(
		savedTransaction,
		editTransaction,
		deleteTransactionCallback
	);
	ev.target.reset();
	updateBalance(transactions);
};

const setup = async () => {
	const results = await fetchTransactions();
	transactions.push(...results);
	transactions.forEach((transaction) =>
		renderTransaction(
			transaction,
			editTransaction,
			deleteTransactionCallback
		)
	);
	updateBalance(transactions);
};

document.addEventListener('DOMContentLoaded', setup);
document
	.querySelector('form')
	.addEventListener('submit', saveTransactionCallback);
