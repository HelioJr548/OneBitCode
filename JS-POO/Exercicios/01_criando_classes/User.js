class User {
	constructor(fullname, email, password) {
		this.fullname = fullname;
		this.email = email;
		this.password = password;
	}

	login(email, password) {
		if (email === this.email && password === this.password) {
			console.log("Login realizado com sucesso.");
		} else {
			console.log("Falha ao fazer login! Email ou senha incorretos.");
		}
	}
}

const helio = new User("Helio", "helio@gmail.com", 1234);

helio.login("helio@gmail.com", 1234);
helio.login("helio@gmail.com", 12345);
