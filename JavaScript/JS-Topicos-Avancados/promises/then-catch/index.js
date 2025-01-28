function execute() {
	return new Promise((resolve, reject) => {
		console.log('A promise está sendo executada.');
		setTimeout(() => {
			if (1 + 1 === 2) {
				reject('1 + 1 não é igual a 2');
			} else {
				console.log('Resolvendo a promise...');
				resolve('Resultado');
			}
		}, 3 * 1000);
	});
}

const p = execute();
p.then((result) => {
	// Utilizamos o metodo .then() para lidar com o resultado bem sucedido da Promise
	console.log(`A promise foi resolvida. O resultado foi: ${result}`);
}).catch((err) => {
	// Para evitarmos o término da aplicação usamos o método .catch() para lidar com a rejeição da promise
	console.log(`A promise foi rejeitada! Motivo: ${err}`);
});

// A forma mais comum de definirmos os métodos .then() e .catch() em uma promise é encadeá-los diretamente na chamada da função
execute()
	.then((result) => {
		console.log(`A promise foi resolvida. O resultado foi: ${result}`);
	})
	.catch((err) => {
		console.log(`A promise foi rejeitada! Motivo: ${err}`);
	})
	.finally(() => {
        // Executado mesmo se promise for concluida ou recusada
		console.log('A promise foi finalizada.');
	});
