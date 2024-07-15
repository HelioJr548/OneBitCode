const createTransactionContainer = (id) => {
	const container = document.createElement('div');
	container.classList.add('transaction');
	container.id = `transaction-${id}`;
	return container;
};

const createTransactionTitle = (name) => {
	const title = document.createElement('span');
	title.classList.add('transaction-title');
	title.textContent = name;
	return title;
};

const createTransactionAmount = (amount) => {
	const span = document.createElement('span');
	span.classList.add('transaction-amount');
	const formatter = Intl.NumberFormat('pt-BR', {
		compactDisplay: 'long',
		currency: 'BRL',
		style: 'currency',
	});
	const formattedAmount = formatter.format(amount);
	if (amount > 0) {
		span.textContent = `${formattedAmount} C`;
		span.classList.add('credit');
	} else {
		span.textContent = `${formattedAmount} D`;
		span.classList.add('debit');
	}
	return span;
};

const createEditTransactionBtn = (transaction, editCallback) => {
	const editBtn = document.createElement('button');
	editBtn.classList.add('edit-btn');
	editBtn.textContent = 'Editar';
	editBtn.addEventListener('click', () => editCallback(transaction));
	return editBtn;
};

const createDeleteTransactionButton = (id, deleteCallback) => {
	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete-btn');
	deleteBtn.textContent = 'Excluir';
	deleteBtn.addEventListener('click', () => deleteCallback(id, deleteBtn));
	return deleteBtn;
};

const renderTransaction = (transaction, editCallback, deleteCallback) => {
	const container = createTransactionContainer(transaction.id);
	const title = createTransactionTitle(transaction.name);
	const amount = createTransactionAmount(transaction.amount);
	const editBtn = createEditTransactionBtn(transaction, editCallback);
	const deleteBtn = createDeleteTransactionButton(
		transaction.id,
		deleteCallback
	);

	container.append(title, amount, editBtn, deleteBtn);
	document.querySelector('#transactions').append(container);
};

const updateBalance = (transactions) => {
	const balanceSpan = document.querySelector('#balance');
	const balance = transactions.reduce(
		(sum, transaction) => sum + transaction.amount,
		0
	);
	const formatter = Intl.NumberFormat('pt-BR', {
		compactDisplay: 'long',
		currency: 'BRL',
		style: 'currency',
	});
	balanceSpan.textContent = formatter.format(balance);
};

export { renderTransaction, updateBalance };
