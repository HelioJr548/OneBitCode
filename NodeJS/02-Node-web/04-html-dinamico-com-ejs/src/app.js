const express = require('express');
const path = require('node:path');
const app = express();

const storedUsers = [];

// EJS config
app.set('view engine', 'ejs'); // define EJS engine
app.set('views', path.join(__dirname, 'views')); // define templates path

// Middleware to process the form data.
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	const title = 'Homepage';
	const message = 'Mensagem dinâmica inserida pelo EJS';

	res.render('index', { title, message }); // provides data
});

// Route to render the form
app.get('/formulario', (req, res) => {
	res.render('form');
});

// Route to handle form POST requests
app.post('/register', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	storedUsers.push({ username, password });

	res.redirect('/usuarios');
});

// Route to render POST form data
app.get('/usuarios', (req, res) => {
	res.render('users', { users: storedUsers });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor Iniciado!`));
