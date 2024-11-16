const http = require('http');

const server = http.createServer((req, res) => {
	console.log(req);
	res.writeHead(200);
	res.write('Servidor HTTP em Node.js funcionando!');
	res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
