// sessionStorage:
// - Similar ao localStorage, mas os dados são válidos apenas durante a sessão atual da página.
document.querySelector("#sessionBtn").addEventListener("click", () => {
	const input = document.querySelector("#session");
	sessionStorage.setItem("sessionInfo", input.value);
	input.value = "";
});

document.querySelector("#readSession").addEventListener("click", () => {
	const sessionInfo = sessionStorage.getItem("info");
	alert(`A informação salva é: ${sessionInfo}`);
});

// localStorage:
// - Armazena dados no navegador que persistem mesmo após fechar e reabrir o navegador.
// - Capacidade de armazenamento maior comparado aos cookies, cerca de 5MB por domínio.
document.getElementById("localBtn").addEventListener("click", function () {
	const input = document.getElementById("local");
	localStorage.setItem("localInfo", input.value);
	input.value = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
	const localInfo = localStorage.getItem("localInfo");
	alert(`O texto salvo no local storage é: ${localInfo}`);
});

// Cookies:
// - Pequenos arquivos de dados armazenados no navegador.
// - Podem ter uma data de validade definida e são enviados com cada requisição HTTP.
// - Comuns para manter sessões de usuário e armazenar preferências.
document.getElementById("cookieBtn").addEventListener("click", function () {
	const input = document.getElementById("cookie");
	// cookieName=value; expires=UTCStringDate; path=/;
	const cookie = "info=" + input.value + ";";
	const expiration = "expires=" + new Date(2022, 9, 9) + ";";
	const path = "path=/;";
	document.cookie = cookie + expiration + path;
	input.value = "";
	console.log(document.cookie);
});

document.getElementById("cookie2Btn").addEventListener("click", function () {
	const input = document.getElementById("cookie2");
	// cookieName=value; expires=UTCStringDate; path=/;
	const cookie = "text=" + input.value + ";";
	const expiration = "expires=" + new Date(2022, 8, 9) + ";";
	const path = "path=/;";
	document.cookie = cookie + expiration + path;
	input.value = "";
	console.log(document.cookie);
});
