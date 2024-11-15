const fs = require('node:fs');
const path = require('node:path');
const readline = require('node:readline');

const { promises: fsPromises } = fs; // Usa as Promises diretamente do fs

run();

function escapeHtmlSpecialCharacters(text) {
	return text.replace(/[<>&]/g, (match) => {
		switch (match) {
			case '<':
				return '&lt;';
			case '>':
				return '&gt;';
			case '&':
				return '&amp;';
			default:
				return match;
		}
	});
}

async function escapeHtmlFile(inputFilePath, outputFilePath) {
	try {
		console.log('Lendo o arquivo...');
		const fileContent = await fsPromises.readFile(inputFilePath, 'utf-8');
		console.log('Escapando caracteres especiais...');
		const escapedContent = escapeHtmlSpecialCharacters(fileContent);
		console.log('Salvando o arquivo...');
		await fsPromises.writeFile(outputFilePath, escapedContent, 'utf-8');
		console.log(`Arquivo escapado com sucesso: ${outputFilePath}`);
	} catch (error) {
		console.error('Erro ao processar o arquivo:', error.message);
		process.exit(1);
	}
}

async function askFilePath(question, allowEmpty = false) {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	return new Promise((resolve) => {
		const ask = () => {
			rl.question(question, (answer) => {
				if (!allowEmpty && answer.trim().length === 0) {
					console.log(
						'O caminho não pode estar vazio. Tente novamente.'
					);
					ask(); // Reexecuta a pergunta
				} else {
					resolve(answer.trim());
					rl.close();
				}
			});
		};
		ask();
	});
}

function getOutputFilePath(outputPath, defaultName) {
	try {
		if (
			fs.existsSync(outputPath) &&
			fs.lstatSync(outputPath).isDirectory()
		) {
			return path.join(outputPath, defaultName);
		}
		return outputPath;
	} catch {
		return outputPath; // Retorna o caminho como está caso a verificação falhe
	}
}

function isValidFilePath(filePath) {
	try {
		return fs.existsSync(filePath) && fs.lstatSync(filePath).isFile();
	} catch {
		return false;
	}
}

async function userInteraction() {
	let inputPath = process.argv[2];
	if (!inputPath) {
		inputPath = await askFilePath(
			'Informe o caminho do arquivo de entrada: '
		);
	}
	inputPath = path.resolve(inputPath);

	if (!isValidFilePath(inputPath)) {
		console.error('Erro: O arquivo de entrada é inválido ou não existe.');
		return;
	}

	const defaultName = `escaped_${path.basename(
		inputPath,
		path.extname(inputPath)
	)}${path.extname(inputPath)}`;
	const answer = await askFilePath(
		`Informe o caminho do arquivo de saída (padrão: ${defaultName}): `,
		true // Permite que o usuário deixe vazio
	);
	let outputPath = answer.length > 0 ? answer : defaultName;
	outputPath = getOutputFilePath(path.resolve(outputPath), defaultName);

	escapeHtmlFile(inputPath, outputPath);
}

function displayHelp() {
	console.log(`
HTML Tag Escaper v1.0
---------------------
Modo de Uso:
1. node html-escaper.js <inputPath> <outputPath>
2. node html-escaper.js (interação assistida)

Parâmetros:
<inputPath>   Caminho do arquivo de entrada
<outputPath>  Caminho do arquivo de saída

Opções:
--help        Exibe esta mensagem de ajuda
	`);
}

function run() {
	const args = process.argv;

	if (args.includes('--help')) {
		displayHelp();
		return;
	}

	if (args.length >= 4) {
		const inputPath = path.resolve(args[2]);
		const outputPath = path.resolve(args[3]);

		if (!isValidFilePath(inputPath)) {
			console.error(
				'Erro: O arquivo de entrada é inválido ou não existe.'
			);
			return;
		}

		escapeHtmlFile(inputPath, outputPath);
	} else {
		displayHelp();
		console.log(
			'Argumentos não informados! Iniciando interação assistida...'
		);
		userInteraction();
	}
}

// Interrompe o programa ao pressionar Ctrl+C
process.on('SIGINT', () => {
	console.log('\nPrograma interrompido pelo usuário.');
	process.exit(0);
});
