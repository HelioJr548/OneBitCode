const express = require('express');

const app = express();

app.use(express.static('public')); // sets up the use of static files.

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html'); // render a static HTML file in response to a request.
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log('Servidor iniciado!');
});
