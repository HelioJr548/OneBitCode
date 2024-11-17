const express = require('express');
const path = require('node:path');
const app = express();

app.set('view engine', 'ejs'); // define EJS engine
app.set('views', path.join(__dirname, 'views')); // define templates path

app.get('/', (req, res) => {
	const title = 'Homepage';
	const message = 'Mensagem dinâmica inserida pelo EJS';

	res.render('index', { title, message }); // provides data
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor Iniciado!`));
