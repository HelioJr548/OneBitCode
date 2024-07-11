// 'await' é uma palavra reservada que nos permite esperar pela execução de uma promise dentro de uma função async
// assim podemos esperar pela sua execução, sem utilizar o .then()

async function asyncSum(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
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

async function execute() {
	try {
		const sumResult = await asyncSum(50, 33);
		console.log(sumResult);
		const subtractResult = await asyncSubtract(50, null);
		console.log(subtractResult);
	} catch (err) {
		console.log(err);
	}
}

execute();
