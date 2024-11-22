const express = require('express');
const path = require('path');
const router = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () =>
	console.log(`> Server is up and running on http://localhost:${PORT}`)
);
