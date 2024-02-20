const input = document.querySelector("#input");

document.querySelector("#value").addEventListener("click", () => {
	input.value = input.value == "" ? "Olá, mundo" : "";

	console.log(input.value);
	console.log(input.getAttribute("value"));
});

document.querySelector("#type").addEventListener("click", () => {
    input.type = input.type !== "radio" ? "radio" : "text";

    input.setAttribute('type', 'radio')
})

document.querySelector("#placeholder").addEventListener("click", () => {
    input.placeholder = input.placeholder == "" ? "Digite algo..." : "";
})

document.querySelector("#disable").addEventListener("click", () => {
    input.setAttribute("disabled", !input.disabled)
})

document.querySelector('data').addEventListener('click', function () {
    const data = input.dataset.somethingElse
    console.log("O valor do atributo data-something-else é: " + data)
    input.dataset.somethingElse = 'Algum outro valor'
    console.log("O valor do atributo data-something-else agora é: " + input.dataset.somethingElse)
  })