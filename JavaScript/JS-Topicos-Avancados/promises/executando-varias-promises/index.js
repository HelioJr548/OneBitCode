// Para executarmos várias promises de forma conjunta podemos usar o Promise.all()
// podemos executar um array de promises e tratá-las como uma única promise
// porém, caso qualquer uma seja rejeitada, o Promise.all() irá falha
function asyncSum(a, b) {
	return new Promise((resolve, reject) => {
		if (typeof a !== 'number' || typeof b !== 'number') {
			reject('arguments must be of type number');
		} else {
			resolve(a + b);
		}
	});
}

function asyncSubtract(a, b) {
	return new Promise((resolve, reject) => {
		if (typeof a !== 'number' || typeof b !== 'number') {
			reject('arguments must be of type number');
		} else {
			resolve(a - b);
		}
	});
}

const sumResult = asyncSum(50, 33);
const subtractResult = asyncSubtract(50, null); // Forçando disparo do erro

Promise.all([sumResult, subtractResult])
	.then((results) => {
		console.log(results);
	})
	.catch((err) => {
		console.log(err);
	});

// podemos utilizar o Promise.all() quando trabalhamos com funções assíncronas em um .map(), que retorna um array
// Nesse caso ele retornará um array de promises, que poderão ser executadas em conjunto
const numbers = [4, 9, 5, 13, 77];

function asyncSquare(x) {
	return Promise.resolve(x * x);
}

Promise.all(numbers.map((number) => asyncSquare(number))).then((squares) => {
	console.log(squares);
});
