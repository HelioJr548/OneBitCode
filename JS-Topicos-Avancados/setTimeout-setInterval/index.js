console.log('Programa iniciado!');

// função setTimeout, uma high-order function que permite executar uma função de callback após um determinado tempo:
// podemos armazenar o retorno do setTimeout, que é um id para então cancelar o timeout caso seja preciso
const timeoutId = setTimeout(() => {
	console.log('2 segundos se passaram desde que o programa foi iniciado.');
}, 2 * 1000);

clearTimeout(timeoutId); // cancela o timeout

// A setInterval, mas ela serve para que possamos executar uma função de callback continuamente em um intervalo fixo de tempo:
// também retorna um id que pode ser usado para parar o setInterval:
let seconds = 0;
const intervalId = setInterval(() => {
	seconds += 3;
	console.log(`Se passaram ${seconds} segundos.`);
	if (seconds > 10) {
		clearInterval(intervalId); // cancela o interval
		console.log('Tempo esgotado! Encerrando...');
	}
}, 3 * 1000);
