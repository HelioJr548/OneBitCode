type Spaceship = {
	name: string;
	pilot: string;
	crewLimit: number;
	crew: string[];
	inMission: boolean;
};

const spaceships: Spaceship[] = [];

function findSpaceship(name: string): Spaceship | undefined {
	return spaceships.find((spaceship) => spaceship.name === name);
}

function registerSpaceship(
	name: string,
	pilot: string,
	crewLimit: number
): void {
	const newSpaceship: Spaceship = {
		name,
		pilot,
		crewLimit,
		crew: [],
		inMission: false,
	};

	spaceships.push(newSpaceship);
	alert(`Spaceship ${name} registered successfully!`);
}

function addCrewMember(spaceshipName: string, crewMember: string): void {
	const spaceship = findSpaceship(spaceshipName);

	if (!spaceship) {
		alert(`Spaceship ${spaceshipName} not found.`);
		return;
	}

	if (spaceship.crew.length >= spaceship.crewLimit) {
		alert(`Crew limit reached for spaceship ${spaceshipName}.`);
		return;
	}

	spaceship.crew.push(crewMember);
	alert(`Crew member ${crewMember} added to spaceship ${spaceshipName}.`);
}

function sendSpaceshipOnMission(spaceshipName: string): void {
	const spaceship = findSpaceship(spaceshipName);

	if (!spaceship) {
		alert(`Spaceship ${spaceshipName} not found.`);
		return;
	}

	if (spaceship.inMission) {
		alert(`Spaceship ${spaceshipName} is already on a mission.`);
		return;
	}

	const requiredCrew = Math.floor(spaceship.crewLimit / 3);
	if (spaceship.crew.length < requiredCrew) {
		alert(
			`Not enough crew members to send spaceship ${spaceshipName} on mission.`
		);
		return;
	}

	spaceship.inMission = true;
	alert(`Spaceship ${spaceshipName} is now on a mission.`);
}

function listSpaceships(): void {
	const contentDiv = document.getElementById('content') as HTMLDivElement;
	contentDiv.innerHTML = ''; // Clear previous content
	contentDiv.style.display = 'block';

	if (spaceships.length === 0) {
		contentDiv.innerHTML = '<p>No spaceships registered.</p>';
		return;
	}

	spaceships.forEach((spaceship) => {
		const spaceshipDiv = document.createElement('div');
		spaceshipDiv.classList.add('spaceship');

		spaceshipDiv.innerHTML = `
		<h2>Spaceship: ${spaceship.name}</h2>
		<p>Pilot: ${spaceship.pilot}</p>
		<p>In Mission: ${spaceship.inMission ? 'Yes' : 'No'}</p>
		<p>Crew Limit: ${spaceship.crewLimit}</p>
		<p>Crew Members: ${spaceship.crew.length}</p>
		<p>Crew: ${spaceship.crew.join(', ')}</p>
	  `;

		contentDiv.appendChild(spaceshipDiv);
	});
}

// DOM
document.getElementById('register-btn')?.addEventListener('click', () => {
	const name = prompt('What is the name of the spaceship to be registered?');
	const pilot = prompt(`What is the name of the pilot of ${name}?`);
	const crewLimit = parseInt(
		prompt(`How many crew members can ${name} hold?`),
		10
	);

	if (!name || !pilot || isNaN(crewLimit) || crewLimit <= 0) {
		alert('Invalid input. Please try again.');
		return;
	}

	registerSpaceship(name, pilot, crewLimit);
	listSpaceships();
});

document.getElementById('add-crew-btn')?.addEventListener('click', () => {
	const member = prompt('What is the name of the crew member?');
	const spaceshipName = prompt(
		`To which spaceship should ${member} be assigned?`
	);

	if (!member || !spaceshipName) {
		alert('Invalid input. Please try again.');
		return;
	}

	addCrewMember(spaceshipName, member);
	listSpaceships();
});

document.getElementById('send-mission-btn')?.addEventListener('click', () => {
	const spaceshipName = prompt(
		'What is the name of the spaceship to be sent on a mission?'
	);

	if (!spaceshipName) {
		alert('Invalid input. Please try again.');
		return;
	}

	sendSpaceshipOnMission(spaceshipName);
	listSpaceships();
});

document
	.getElementById('list-spaceships-btn')
	?.addEventListener('click', listSpaceships);
