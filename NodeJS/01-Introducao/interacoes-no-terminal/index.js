//	stdin e stdout são, respectivamente, streams de leitura e escrita
process.stdout.write('Olá, mundo!\\n');

process.stdin.on('data', (data) => {
	process.stdout.write(`Você digitou: ${data}`);
});

//	O NodeJS fornece o modulo nativo  'readline' para a criacao de interacoes de leitura/escrita, ou pergunta/resposta
const readline = require('node:readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', (input) => {
	rl.write(`Você digitou: "${input}"`);
});

//	metodo question() da interface 'readline'
rl.question('Qual é o seu nome? ', (answer) => {
	rl.write(`Olá, ${answer}!\\n`);
	// podemos customizar o comportamento de saída dos nossos programas no terminal através do evento “close”
	rl.close();
});

rl.on('close', () => {
	rl.write('Saindo...');
	// repare que ao adicionar um listener para "close" precisaremos
	// encerrar o processo atual manualmente ou ele ficará "pendurado"
	process.exit(0);
});

//   “SIGINT”, o famoso “Ctrl + C”, que interrompe a execução
rl.on('SIGINT', () => {
	rl.question('Deseja realmente sair? (s/n) ', (resposta) => {
		if (resposta.trim().toLowerCase() === 's') {
			rl.close();
		} else {
			rl.write('Você escolheu continuar.');
		}
	});
});
