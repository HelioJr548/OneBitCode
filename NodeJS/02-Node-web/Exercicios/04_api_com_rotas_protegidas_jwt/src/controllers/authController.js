const { JWT_SECRET } = require('../config/env');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

module.exports = {
	// POST /auth/register
	register: (req, res) => {
		const { name, email, password } = req.body;

		if (
			typeof name !== 'string' ||
			typeof email !== 'string' ||
			typeof password !== 'string'
		) {
			return res.status(400).json({ message: 'Invalid fields!' });
		}

		const registeredUser = userModel.registerUser(name, email, password);

		if (!registeredUser) {
			return res.status(400).json({ message: 'Email already in use!' });
		}

		res.status(201).json(registeredUser);
	},

	// POST /auth/register
	login: (req, res) => {
		const { email, password } = req.body;

		if (typeof email !== 'string' || typeof password !== 'string') {
			return res.status(400).json({ message: 'Invalid fields!' });
		}

		const user = userModel.findByEmail(email);

		if (!user) return res.status(404).json({ message: 'User not found!' });

		if (user.password !== password) {
			return res.status(400).json({ message: 'Invalid credentials' });
		}

		const payload = { id: user.id, email: user.email };
		const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });

		res.json({ token });
	},
};
