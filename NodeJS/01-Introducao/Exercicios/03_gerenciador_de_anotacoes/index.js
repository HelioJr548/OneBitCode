const fs = require('fs');
const path = require('path');
const readline = require('readline');

main();

const notesDirectory = path.join(__dirname, 'notes');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function initNotesDirectory() {
	if (!fs.existsSync(notesDirectory)) {
		fs.mkdirSync(notesDirectory);
	}
}

function listNotes() {
	const notes = fs.readdirSync(notesDirectory);

	if (notes.length === 0) {
		console.log(`\nNenhuma nota encontrada.`);
		askForNextAction();
	} else {
		console.log(`\nNotas salvas:`);
		notes.forEach((note, index) => {
			console.log(`${index + 1}. ${note}`);
		});
	}
}

function readNote() {
	listNotes();

	rl.question(`Digite o numero da nota que deseja ler: `, (index) => {
		const notes = fs.readdirSync(notesDirectory);
		const selectedNote = notes[index - 1];

		if (!selectedNote) {
			console.log(`Número da nota inválido!`);
		} else {
			const notePath = path.join(notesDirectory, selectedNote);
			const content = fs.readFileSync(notePath, 'utf-8');
			console.log(`Conteudo da nota '${selectedNote}': \n${content}`);
		}
		askForNextAction();
	});
}

function createNote() {
	rl.question(`Digite o nome da nota: `, (noteName) => {
		const notePath = path.join(notesDirectory, noteName);

		rl.question(`Digite o conteúdo da nota:\n`, (content) => {
			fs.writeFileSync(`${notePath}.txt`, content, 'utf-8');
			console.log(`Nota '${noteName}' foi criada com sucesso`);

			askForNextAction();
		});
	});
}

function deleteNote() {
	listNotes();

	rl.question(`Digite o número da nota que deseja excluir: `, (index) => {
		const notes = fs.readdirSync(notesDirectory);
		const selectedNote = notes[index - 1];

		if (!selectedNote) {
			console.log(`Número da nota inválido!`);
		} else {
			const notePath = path.join(notesDirectory, selectedNote);
			fs.unlinkSync(notePath);
			console.log(`Nota ${selectedNote} excluída com sucesso.`);
		}
		askForNextAction();
	});
}

function displayMenu() {
	console.log(`--------------------------------
 Notas Rápidas no Terminal V1.0
--------------------------------

Escolha uma opção:
	[1]. Listar Nota
	[2]. Ler Nota
	[3]. Criar Nota
	[4]. Excluir Nota
	[0]. Fechar Programa
`);
}

function askForNextAction() {
	rl.question(`\nDeseja realizar outra ação? (s/n): `, (answer) => {
		if (answer.toLowerCase() === 'n') {
			console.log(`Encerrando...`);
			rl.close();
			process.exit(0);
		}

		main();
	});
}

function main() {
	initNotesDirectory();

	console.clear();
	displayMenu();
	rl.question(`Digite o número da opção desejada: `, (option) => {
		switch (option) {
			case '1':
				listNotes();
				askForNextAction();
				break;
			case '2':
				readNote();
				break;
			case '3':
				createNote();
				break;
			case '4':
				deleteNote();
				break;
			case '0':
				console.log(`Saindo...`);
				rl.close();
				process.exit(0);
			default:
				console.log(`Opção inválida!`);
				break;
		}
	});
}
