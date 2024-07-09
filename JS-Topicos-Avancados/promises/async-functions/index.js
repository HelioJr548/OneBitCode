// Funções async são uma forma mais conveniente de se trabalhar com promises no javascript moderno
// elas permitem criar funções que automaticamente retornam uma promise, sem que nós precisemos instanciá-la
async function asyncSum(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		// Podemos rejeitar uma promise, através do objeto global Promise e seu método .reject()
		return Promise.reject('arguments must be of type number');
	}
	return a + b;
}

async function asyncSubtract(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return Promise.reject('arguments must be of type number');
	}
	return a - b;
}

asyncSum(50, null)
	.then((result) => console.log(result))
	.catch((err) => console.log(err));

asyncSubtract(50, 33)
	.then((result) => console.log(result))
	.catch((err) => console.log(err));
