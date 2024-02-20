let listItemCounter = 1;

const addContact = () => {
	const contactSection = document.querySelector("#contacts-list");

	const h3 = document.createElement("h3");
	h3.innerText = "Contato";

	const ul = document.createElement("ul");

	const nameLi = document.createElement("li");
	nameLi.innerHTML = `<label for="fullname-${listItemCounter}">Nome: </label>`;
	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.name = "fullname";
	nameInput.id = `fullname-${listItemCounter}`;
	nameLi.appendChild(nameInput);

	const phoneLi = document.createElement("li");
	phoneLi.innerHTML = `<label for="phone-${listItemCounter}">Telefone: </label>`;
	const phoneInput = document.createElement("input");
	phoneInput.type = "tel";
	phoneInput.name = "phone";
	phoneInput.id = `phone-${listItemCounter}`;
	phoneLi.append(phoneInput);

	const addressLi = document.createElement("li");
	addressLi.innerHTML = `<label for="address-${listItemCounter}">Endereço: </label>`;
	const addressInput = document.createElement("input");
	addressInput.type = "tel";
	addressInput.name = "address";
	addressInput.id = `address-${listItemCounter}`;
	addressLi.appendChild(addressInput);

	ul.append(
		nameLi,
		document.createElement("br"),
		phoneLi,
		document.createElement("br"),
		addressLi
	);

	contactSection.append(h3, ul);
	listItemCounter++;
};

const removeContact = () => {
	const contactSection = document.getElementById("contacts-list");

	const titles = document.getElementsByTagName("h3");
	const contacts = document.getElementsByTagName("ul");

	contactSection.removeChild(titles[titles.length - 1]);
	contactSection.removeChild(contacts[contacts.length - 1]);

	listItemCounter--;
};
