const person = {
	name: "Luke",
	job: "Farmer",
	parents: ["Anakin", "Padme"],
};
// Forma antiga de desestruturação
const name = person.name;
// Forma nova de desestruturação
const { job, parents } = person;
console.log(name, job, parents);

// A desestruração em arrays segue a ordem
const [father, mother] = parents;
console.log(father, mother);

// Maneira antiga de criar funções com desestruturação
function oldCreateUser(person) {
	const id = Math.floor(Math.random() * 9999);
	return {
		id,
		name: person.name,
		job: person.job,
		parents: person.parents,
	};
}
console.log(oldCreateUser(person));

// Maneira nova de criar funções com desestruturação
function createUser({ name, job, parents }) {
	const id = Math.floor(Math.random() * 9999);
	return {
		id,
		name,
		job,
		parents,
	};
}

const luke = createUser(person);
console.log(luke);
