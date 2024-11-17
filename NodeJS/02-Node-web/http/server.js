const http = require('node:http');

const server = http.createServer((request, response) => {
	console.log(request);
	response.writeHead(200);
	response.write('Servidor HTTP em Node.js funcionando!');
	response.end();
});
