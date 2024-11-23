const express = require('express');
const gamesController = require('./controllers/gamesController');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Permite a leitura do corpo das requisições no formato JSON

app.get('/games', gamesController.index);
app.get('/games/:id', gamesController.show);
app.post('/games', gamesController.save);
app.post('/games/:id/genres', gamesController.addGenre);
app.put('/games/:id', gamesController.update);

app.listen(port, () =>
	console.log('> Server is up and running on port : ' + port)
);
