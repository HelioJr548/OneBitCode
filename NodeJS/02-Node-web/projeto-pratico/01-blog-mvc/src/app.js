const express = require('express');
const path = require('path');
const router = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

// ejs config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static file config
app.use(express.static('public'));

// request data config
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use(router);

app.listen(PORT, () =>
	console.log(`> Server is up and running on port : http://localhost:${PORT}`)
);
