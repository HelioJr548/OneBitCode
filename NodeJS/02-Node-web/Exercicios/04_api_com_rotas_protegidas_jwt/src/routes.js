const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const welcomeController = require('./controllers/welcomeController');
const {
	optionalAuth,
	ensureAuth,
	ensureAdmin,
} = require('./middlewares/authMiddleware');

const router = require('express').Router();

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

router.get('/welcome', optionalAuth, welcomeController.welcome);

router.get('/users', ensureAuth, ensureAdmin, userController.index);
router.get('/users/:id', ensureAuth, ensureAdmin, userController.show);
router.post('/users', ensureAuth, ensureAdmin, userController.save);
router.delete('/users/:id', ensureAuth, ensureAdmin, userController.delete);

module.exports = router;
