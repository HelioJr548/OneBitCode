function checkAge(age) {
	return new Promise((resolve, reject) => {
		if (age) {
			resolve(age > 18);
		} else {
			reject(new Error('age is required'));
		}
	});
}

function getAge(birthday) {
	return new Promise((resolve, reject) => {
		if (birthday) {
			const birthYear = new Date(birthday).getFullYear();
			const currentYear = new Date().getFullYear();
			resolve(currentYear - birthYear); // retorna idade
		} else {
			reject(new Error('birthday is required'));
		}
	});
}

// Maneira Inviavel (promise dentro de promise)
getAge('1995-09-02')
	.then((age) => {
		checkAge(age)
			.then((isOver18) => {
				if (isOver18) {
					console.log('Maior de idade');
				} else {
					console.log('Menor de idade');
				}
			})
			.catch((err) => {
				console.log(err.message);
			});
	})
	.catch((err) => {
		console.log(err.message);
	});

//  Maneira Correta (encadeamento de promises)
getAge('2009-09-02')
	.then((age) => {
		return checkAge(age); // retorna o resultado da promise
	})
	.then((isOver18) => { // true ou false
		if (isOver18) { 
			console.log('Maior de idade');
		} else {
			console.log('Menor de idade');
		}
	})
	.catch((err) => {
		console.log(err.message);
	});
