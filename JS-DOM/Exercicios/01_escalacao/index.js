const addPlayer = () => {
	const position = document.querySelector("#position");
	const name = document.querySelector("#name");
	const jersey = document.querySelector("#jersey-number");

	const confirmation = confirm(
		`Escalar ${name.value} como ${position.value}?`
	);

	if (confirmation) {
		const teamLineupUl = document.querySelector("#team-lineup");
		const playerItem = document.createElement("li");
		playerItem.id = `player-${jersey.value}`;
		playerItem.innerText = `${position.value}: ${name.value} (${jersey.value})`;

		teamLineupUl.appendChild(playerItem);

		position.value = "";
		name.value = "";
		jersey.value = "";
	}
};

function removePlayer() {
	const number = document.getElementById("numberToRemove");
	const playerToRemove = document.querySelector(`#player-${number.value}`);

	const confirmation = confirm(
		`Remover o jogador ${playerToRemove.innerText}?`
	);

	if (confirmation) {
		document.getElementById("team-lineup").removeChild(playerToRemove);
		number.value = "";
	}
}
