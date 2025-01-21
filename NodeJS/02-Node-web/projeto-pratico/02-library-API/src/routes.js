const authController = require('./constrollers/authController');
const { ensureAuth } = require('./middlewares/authMiddleware');

const router = require('express').Router();

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

router.get('/test', ensureAuth, (_, res) => res.json({ message: 'ok' }));

module.exports = router;
