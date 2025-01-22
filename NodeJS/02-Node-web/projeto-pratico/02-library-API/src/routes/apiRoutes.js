const bookController = require('../constrollers/bookController');

const apiRouter = require('express').Router();

apiRouter.get('/books', bookController.index);
apiRouter.get('/books/:id', bookController.show);

apiRouter.post('/books', bookController.save);
apiRouter.put('/books/:id', bookController.update);
apiRouter.delete('/books/:id', bookController.delete);

module.exports = apiRouter;
