const users = [
	// utilizando niveis de privilegios | estrategia baseada em atributos (ABAC)
	// adição da propriedade 'role'
	{ username: 'Helio', password: '123456', role: 'admin' },
	{ username: 'John Doe', password: '654321', role: 'standard' },
];

module.exports = users;
