const fs = require('node:fs');

// Async code:
const filename = 'file.csv';
const exists = fs.existsSync(filename); // check if the file exists
if (exists) {
	fs.readFile(filename, 'utf-8', (error, data) => { // responsible for reading the file
		if (error) {
			console.log(`Error reading the file: ${error.message}`);
            return;
		}
		console.log(data);
	});
} else {
	console.log('File cannot be found or does not exist!');
}

// Sync code:
try {
	const data = fs.readFileSync('./file.txt', 'utf-8'); // responsible for reading the file
	console.log(data);

	const entries = data.split(',');
	console.log(entries);
	entries.forEach((entry) => console.log(entry));
} catch (error) {
	console.log(`Error reading the file: ${error.message}`);
}
