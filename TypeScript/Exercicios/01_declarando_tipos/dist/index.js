var _a, _b, _c, _d;
const spaceships = [];
function findSpaceship(name) {
    return spaceships.find((spaceship) => spaceship.name === name);
}
function registerSpaceship(name, pilot, crewLimit) {
    const newSpaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false,
    };
    spaceships.push(newSpaceship);
    alert(`Spaceship ${name} registered successfully!`);
}
function addCrewMember(spaceshipName, crewMember) {
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
function sendSpaceshipOnMission(spaceshipName) {
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
        alert(`Not enough crew members to send spaceship ${spaceshipName} on mission.`);
        return;
    }
    spaceship.inMission = true;
    alert(`Spaceship ${spaceshipName} is now on a mission.`);
}
function listSpaceships() {
    const contentDiv = document.getElementById('content');
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
(_a = document.getElementById('register-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    const name = prompt('What is the name of the spaceship to be registered?');
    const pilot = prompt(`What is the name of the pilot of ${name}?`);
    const crewLimit = parseInt(prompt(`How many crew members can ${name} hold?`), 10);
    if (!name || !pilot || isNaN(crewLimit) || crewLimit <= 0) {
        alert('Invalid input. Please try again.');
        return;
    }
    registerSpaceship(name, pilot, crewLimit);
    listSpaceships();
});
(_b = document.getElementById('add-crew-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    const member = prompt('What is the name of the crew member?');
    const spaceshipName = prompt(`To which spaceship should ${member} be assigned?`);
    if (!member || !spaceshipName) {
        alert('Invalid input. Please try again.');
        return;
    }
    addCrewMember(spaceshipName, member);
    listSpaceships();
});
(_c = document.getElementById('send-mission-btn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
    const spaceshipName = prompt('What is the name of the spaceship to be sent on a mission?');
    if (!spaceshipName) {
        alert('Invalid input. Please try again.');
        return;
    }
    sendSpaceshipOnMission(spaceshipName);
    listSpaceships();
});
(_d = document
    .getElementById('list-spaceships-btn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', listSpaceships);
