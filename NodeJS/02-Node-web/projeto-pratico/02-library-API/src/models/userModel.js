const uuid = require('uuid').v4;
const bcrypt = require('bcrypt');

const users = [
	{ id: '1', name: 'Helio', email: 'h@gmail.com', password: '1234' },
	{ id: '2', name: 'Junior', email: 'j@gmail.com', password: '0000' },
];

module.exports = {
	getAllUsers: () => users,

	getUserById: (id) => users.find((user) => user.id === id),

	getUserByEmail: (email) => users.find((user) => user.email === email),

	createUSer: (name, email, password) => {
		const newUser = {
			id: uuid(),
			name,
			email,
			password: bcrypt.hashSync(password, 10),
		};

		users.push(newUser);
		return newUser;
	},
};
