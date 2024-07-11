async function calcImc(weight, height) {
	if (![weight, height].every((val) => typeof val === 'number')) {
		return Promise.reject('\nArguments must be of type number\n');
	}

	const IMC = weight / Math.pow(height, 2);
	return IMC;
}

function classifyImc(imc) {
	if (imc < 18.5) return 'MAGREZA';
	if (imc < 25) return 'NORMAL';
	if (imc < 30) return 'SOBREPESO';
	if (imc < 40) return 'OBESIDADE';
	return 'OBESIDADE GRAVE';
}

async function showImc(weight, height) {
	try {
		const imc = await calcImc(weight, height);
		console.log('\nVerificando se está tudo certo...');
		console.log(
			`IMC para ${weight}kg e ${height}m é de: ${imc.toFixed(2)}`
		);
		console.log(`Situação: ${classifyImc(imc)}`);
	} catch (error) {
		console.log(error);
	}
}

showImc(71, 1.74);
showImc(48, 1.6);
showImc(71, 'texto');
showImc(82, 1.72);
showImc(120, 1.8);
