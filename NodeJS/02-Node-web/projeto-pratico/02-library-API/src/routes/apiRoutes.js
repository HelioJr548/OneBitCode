const bookController = require('../constrollers/bookController');
const loanController = require('../constrollers/loanController');
const { ensureAuth } = require('../middlewares/authMiddleware');

const apiRouter = require('express').Router();

apiRouter.get('/books', bookController.index);
apiRouter.get('/books/:id', bookController.show);

apiRouter.post('/books', bookController.save);
apiRouter.put('/books/:id', bookController.update);
apiRouter.delete('/books/:id', bookController.delete);

apiRouter.get('/loans', loanController.index);
apiRouter.get('/loans/:id', loanController.show);

apiRouter.post('/loans', ensureAuth, loanController.save);
apiRouter.post('/loans/:id/return', loanController.return);

module.exports = apiRouter;
