// O operador de encadeamento opcional (?.) verifica se 'obj' é null ou undefined antes de acessar 'prop', evitando erros e retornando undefined se 'obj' for nulo.
const user = {
	name: "John Doe",
	email: "doejohn@email.com",
	friends: [
		{
			name: "Mary",
			address: {
				street: "Some Street",
				number: 89,
			},
		},
	],
	age: 42,
	phone: {
		countryCode: "+55",
		ddd: "22",
		number: "998765432",
	},
};

// console.log(user.friends[0].phone.ddd) // dispara erro por retornar undefined
console.log(user.friends[0].phone?.ddd);
console.log(user?.brothers?.length);

console.log(user.brothers?.[5].name);
console.log(user.phone?.ddd);
