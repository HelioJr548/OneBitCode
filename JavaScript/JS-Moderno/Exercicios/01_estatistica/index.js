const average = (...numbers) => {
	const sum = numbers.reduce((accum, num) => accum + num, 0);
	return sum / numbers.length;
};

console.log(`Média Aritmética: ${average(2, 6, 3, 7, 4)}`);

const weightedAverage = (...entries) => {
	const sum = entries.reduce(
		(accum, { number, weight }) => accum + number * (weight ?? 1),
		0
	);
	const weightSum = entries.reduce(
		(accum, entry) => accum + (entry.weight ?? 1),
		0
	);
	return sum / weightSum;
};

console.log(
	`Média Ponderada: ${weightedAverage(
		{ number: 7, weight: 2 },
		{ number: 9, weight: 5 },
		{ number: 3, weight: 1 }
	)}`
);

const median = (...numbers) => {
	const orderedNumbers = [...numbers].sort((a, b) => a - b);
	const middle = Math.floor(orderedNumbers.length / 2);
	const firstMedian = orderedNumbers[middle - 1];
	const secondMedian = orderedNumbers[middle];
	return orderedNumbers.length % 2 == 0
		? average(firstMedian, secondMedian)
		: orderedNumbers[middle];
};

console.log(`Mediana: ${median(2, 4, 5, 7, 42, 99)}`);

const mode = (...numbers) => {
	// [ [n, qtd], [n, qtd], [n, qtd] ]
	const quantities = numbers.map((num) => [
		num,
		numbers.filter((n) => num === n).length,
	]);
	quantities.sort((a, b) => b[1] - a[1]);
	return quantities[0][0];
};

console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`);
