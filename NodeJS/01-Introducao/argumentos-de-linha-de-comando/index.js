const args = process.argv;

const namedArguments = {};

args.slice(2).forEach((arg, index, array) => {
	if (arg.startsWith('--')) {
		const argName = arg.slice(2);
		const argValue = array[index + 1];
		namedArguments[argName] = argValue;
	}
});

console.log(`Argumentos Informados: `, namedArguments);
console.log(namedArguments);
console.log(args);
