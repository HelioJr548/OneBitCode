function calcImc(weight, height) {
	return new Promise((resolve, reject) => {
		console.log('Verificando se esta tudo certo...');
		if (typeof weight !== 'number' || typeof height !== 'number') {
			reject('arguments must be of type number');
		}

		const IMC = weight / Math.pow(height, 2);
		resolve(IMC);
	});
}

function showImc(weight, height) {
	calcImc(weight, height)
		.then((result) => {
			console.log(
				`Resultado do IMC para peso ${weight}kg e altura ${height}:`
			);
			if (result < 18.5) console.log('Situação: MAGREZA');
			else if (result < 25) console.log('Situação: NORMAL');
			else if (result < 30) console.log('Situação: SOBREPESO');
			else if (result < 40) console.log('Situação: OBESIDADE');
			else console.log('Situação: OBESIDADE GRAVE');
		})
		.catch((error) => {
			console.log(error);
		});

	console.log(
		`Calculando o IMC para peso ${weight}kg e altura ${height}...\n`
	);
}

showImc(71, 1.74);
showImc(48, 1.6);
showImc(71, 'texto');
showImc(82, 1.72);
showImc(120, 1.8);
