const HttpError = require('../errors/HttpError');
const bookModel = require('../models/bookModel');
const loanModel = require('../models/loanModel');

module.exports = {
	// GET /api/loans
	index: (req, res) => {
		const loans = loanModel.getAllLoans();
		res.json(loans);
	},

	// GET /api/loans/:id
	show: (req, res) => {
		const { id } = req.params;
		const loan = loanModel.getLoanById(id);
		if (!loan) throw new HttpError(404, 'Empréstimo não encontrado!');
		res.json(loan);
	},

	// POST /api/loans
	save: (req, res) => {
		const user = req.user;
		const { bookId } = req.body;

		if (typeof bookId !== 'string')
			throw new HttpError(400, 'ID de livro inválido!');

		const book = bookModel.getBooksById(bookId);
		if (!book) throw new HttpError(404, 'Livro não encontrado!');

		const newLoan = loanModel.createLoan(user, book);
		res.status(201).json(newLoan);
	},

	// POST /api/loans/:id/return
	return: (req, res) => {
		const { id } = req.params;
		const loan = loanModel.returnLoan(id);
		res.json(loan);
	},
};
