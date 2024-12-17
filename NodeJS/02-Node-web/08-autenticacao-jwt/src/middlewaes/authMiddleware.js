const jwt = require('jsonwebtoken');
const users = require('../models/users');
const secretKey = 'palavrea-chave-super-secreta';

const authMiddleare = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res.status(401).json({ message: 'Authorization required' });
	}

	const token = authHeader.split(' ')[1];

	try {
		const decodedToken = jwt.verify(token, secretKey);

		const user = users.find(
			(user) => user.username === decodedToken.username
		);

		if (!user) {
			return res.status(401).json({ message: 'Invalid user' });
		}

		req.authenticatedUser = user;

		next();
	} catch (error) {
		return res.status(401).json({ message: 'Invalid token' });
	}

	next();
};

module.exports = authMiddleare;
