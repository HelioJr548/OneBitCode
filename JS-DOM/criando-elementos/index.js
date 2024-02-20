let listItemCounter = 1;

const addInput = () => {
	const ul = document.querySelector("#inputs");

	const newLi = document.createElement("li");
	newLi.className = "list-item";
	newLi.id = `list-item-${listItemCounter}`;
	newLi.innerText = "Novo Input";

	const newInput = document.createElement("input");
	newInput.type = "text";
	newInput.name = "input";

	newLi.appendChild(newInput);
	ul.appendChild(newLi);

	// Increase the counter for the next call
	listItemCounter++;
};
