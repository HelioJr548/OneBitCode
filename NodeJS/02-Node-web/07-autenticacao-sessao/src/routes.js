const authController = require('./controllers/authController');
const dashboardController = require('./controllers/dashboardController');

const router = require('express').Router();

router.get('/', authController.index);
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

router.get('/dashboard', dashboardController.dashboard);

module.exports = router;
