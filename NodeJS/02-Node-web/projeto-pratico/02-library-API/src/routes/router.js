const router = require('express').Router();
const errorMiddleware = require('../middlewares/errorMiddleware');
const apiRoutes = require('./apiRoutes');
const authRoutes = require('./authRoutes');

router.use('/auth', authRoutes);
router.use('/api', apiRoutes);

router.use(errorMiddleware);

module.exports = router;
