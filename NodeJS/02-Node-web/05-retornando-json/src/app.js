const express = require('express');
const gamesController = require('./controllers/gamesController');
const app = express();
const port = process.env.PORT || 3000;

app.get('/games', gamesController.index);
app.get('/games/:id', gamesController.show);

app.listen(port, () =>
	console.log('> Server is up and running on port : ' + port)
);
