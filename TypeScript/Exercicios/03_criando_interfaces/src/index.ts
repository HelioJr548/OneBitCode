// Auxiliares
const users: GithubUserResponse[] = [];

// INTERFACES
interface GithubUserResponse {
	id: number;
	login: string;
	name: string;
	bio: string;
	public_repos: number;
	repos_url: string;
	message?: 'Not Found';
}

interface GithubRepoResponse {
	name: string;
	description: string;
	fork: boolean;
	stargazers_count: number;
}

// Função 1: Fetch Github do usuario
async function fetchUser(username: string) {
	const response = await fetch(`https://api.github.com/users/${username}`);
	const user: GithubUserResponse = await response.json();
	if (user.message) {
		console.log('Usuário não encontrado!');
	} else {
		users.push(user);
		console.log(
			`O usuário ${user.login} foi salvo:\n` +
				`\nID: ${user.id}` +
				`\nLogin: ${user.login}` +
				`\nNome: ${user.name}` +
				`\nBio: ${user.bio}` +
				`\nRepositórios públicos: ${user.public_repos}\n`
		);
	}
}

// Função 2: Mostrar informações dos Repositórios
async function showUser(username: string) {
	const user = users.find((user) => user.login == username);
	if (typeof user === 'undefined') {
		console.log('Usuário não encontrado!');
	} else {
		const response = await fetch(user.repos_url);
		const repos: GithubRepoResponse[] = await response.json();

		let message =
			`ID: ${user.id}` +
			`\nLogin: ${user.login}` +
			`\nNome: ${user.name}` +
			`\nBio: ${user.bio}` +
			`\nRepositórios públicos: ${user.public_repos}`;

		repos.forEach((repo) => {
			message +=
				`\nNome: ${repo.name}` +
				`\nDescrição: ${repo.description}` +
				`\nEstrelas: ${repo.stargazers_count}` +
				`\nÉ um fork: ${repo.fork ? 'Sim' : 'Não'}\n`;
		});

		console.log(message);
	}
}

// Função 3: Mostrar todos os usuários
function showAllUsers() {
	let message = 'Usuários:\n';

	users.forEach((user) => {
		message += `\n- ${user.login}`;
	});

	console.log(message);
}

// Função 4: Mostrar Total de repositórios
function showReposTotal() {
	const reposTotal = users.reduce(
		(accum, user) => accum + user.public_repos,
		0
	);

	console.log(
		`O grupo possui um total de ${reposTotal} repositórios públicos!`
	);
}

// Função 5: Mostrar top 5
function showTopFive() {
	const topFive = users
		.slice()
		.sort((a, b) => b.public_repos - a.public_repos)
		.slice(0, 5);

	let message = 'Top 5 usuários com mais repositórios públicos:\n';

	topFive.forEach((user, index) => {
		message += `\n${index + 1} - ${user.login}: ${
			user.public_repos
		} repositórios`;
	});

	console.log(message);
}

// Função 6: Chamar todas as funções
async function main() {
	await fetchUser('HelioJr548');
	await fetchUser('isaacpontes');
	await fetchUser('julianaconde');
	await fetchUser('pcaldass');
	await fetchUser('lucassqueirogaa');
	await fetchUser('frans203');
	await fetchUser('LeDragoX');

	await showUser('HelioJr548');
	await showUser('isaacpontes');

	showAllUsers();
	showReposTotal();
	showTopFive();
}

main();
