const users = [
	{ username: 'Helio', password: '123456' },
	{ username: 'John Doe', password: '654321' },
];

module.exports = {
	// GET /
	index: (_, res) => {
		res.render('index');
	},

	// POST /auth/register
	register: (req, res) => {
		const { username, password } = req.body;

		const userAlreadyExists = users.find(
			(user) => user.username === username
		);

		if (userAlreadyExists) {
			return res.status(400).redirect('/');
		}

		const newUser = { username, password };
		users.push(newUser);

		res.status(201).redirect('/dashboard');
	},

	// POST /auth/login
	login: (req, res) => {
		const { username, password } = req.body;

		const user = users.find((user) => user.username === username);

		if (!user) {
			return res.status(404).redirect('/');
		}

		if (password !== user.password) {
			return res.status(404).redirect('/');
		}

		res.redirect('/dashboard');
	},

	// GET /auth/logout
};
