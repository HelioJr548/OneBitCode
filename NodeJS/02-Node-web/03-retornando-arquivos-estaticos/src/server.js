const express = require('express');

const app = express();

app.use(express.static('public')); // sets up the use of static files.

const PORT = 3000;

app.listen(PORT, () => {
	console.log('Servidor iniciado!');
});
