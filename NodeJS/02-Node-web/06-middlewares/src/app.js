const express = require('express');
const uploadMiddlewares = require('./middlewares/uploadMiddleware');

const app = express();

app.use(express.static('public'));

app.post('/upload', uploadMiddlewares.single('image'), (req, res) => {
	console.log(req.file, req.body);
	res.json({ message: 'Arquivo salvo com sucesso' });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Sercidor iniciado!`));
