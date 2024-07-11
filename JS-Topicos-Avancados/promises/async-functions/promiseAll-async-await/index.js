function waitFor(seconds) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, seconds * 1000);
	});
}

const numbers = [4, 5, 9, 13, 77];

// No codigo abaixo a função .map() retorna um array de promises pendentes
const squares = numbers.map(async (number) => {
	await waitFor(1);
	return number * number;
});
console.log(squares);

// Poderíamos usar o Promise.all() para esperar pelos resultados e exibi-los através do .then()
Promise.all(squares).then((results) => {
	console.time('promise-then');
	console.log(`Utilizando Promise.All().then(): ${results}`);
	console.timeEnd('promise-then');
});

// Mas se estivermos trabalhando com uma função async podemos usar o await no próprio Promise.all()
async function execute() {
	console.time('asyncFunction');

	const squares = await Promise.all(
		numbers.map(async (number) => {
			await waitFor(1);
			return number * number;
		})
	);

	console.log(
		`Utilizando Promise.all() com await em uma async function: ${squares}`
	);

	console.timeEnd('asyncFunction');
}

execute();
