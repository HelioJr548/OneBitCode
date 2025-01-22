const authController = require('../constrollers/authController');
const { ensureAuth } = require('../middlewares/authMiddleware');
const authRouter = require('express').Router();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.get('/test', ensureAuth, (_, res) => res.json({ message: 'ok' }));

module.exports = authRouter;
