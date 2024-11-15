import fs from 'node:fs';

export function createFile(text) {
	return new Promise((resolve, reject) => {
		fs.writeFile('./myFile.txt', text, (error) => {
			if (error) {
				reject(`Error writing the file: ${error.message}`);
			} else {
				resolve();
			}
		});
	});
}

export function showFile() {
	return new Promise((resolve, reject) => {
		fs.readFile('./myFile.txt', 'utf-8', (error, text) => {
			if (error) {
				reject(`Error reading the file: ${error.message}`);
			} else {
				console.log(text);
				resolve();
			}
		});
	});
}

export function updateFile(newText) {
	return new Promise((resolve, reject) => {
		fs.writeFile('./myFile.txt', newText, (error) => {
			if (error) {
				reject(`Error updating the file: ${error.message}`);
			} else {
				resolve();
			}
		});
	});
}

export function deleteFile() {
	return new Promise((resolve, reject) => {
		fs.unlink('./myFile.txt', (error) => {
			if (error) {
				console.log(`Error deleting the file: ${error.message}`);
				resolve();
			} else {
				console.log('File successfully deleted!');
				resolve();
			}
		});
	});
}
