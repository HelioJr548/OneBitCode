const fs = require('node:fs');

// Async code
fs.unlink('file.csv', (error) => { // responsible for deleting the file
	if (error) {
		console.log(`Error deleting the file: ${error.message}`);
		return;
	}
	console.log('File successfully deleted asynchronously');
});