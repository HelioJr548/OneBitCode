const express = require('express');
const authMiddleare = require('../middlewaes/authMiddleware');

const protectedRouter = express.Router();

protectedRouter.get('/dashboard', authMiddleare, (req, res) => {
	const username = req.authenticatedUser.username;
	res.json({
		message: `Você está na área protegida!. Bem-vindo(a) ${username}`,
	});
});

protectedRouter.get('/another-route', (req, res) => {
	// protectedRouter code here
});

module.exports = protectedRouter;
