var _a, _b, _c, _d;
const planets = [];
function findPlanet(planetName) {
    return planets.find((planet) => planet.name === planetName);
}
function registerPlanet(name, coordinatesStr, situation) {
    const coordinates = coordinatesStr.split(',').map(Number);
    const planet = findPlanet(name);
    if (planet) {
        alert(`Planet already registered`);
        return;
    }
    const newPlanet = {
        name,
        coordinates,
        situation,
        satellites: [],
    };
    planets.push(newPlanet);
    alert('Planet registered successfully!');
    listPlanets();
}
function updatePlanetSituation(planetName, newSituation) {
    const planet = findPlanet(planetName);
    if (!planet) {
        alert(`Planet not found!`);
        return;
    }
    planet.situation = newSituation;
    alert('Planet situation updated successfully!');
    listPlanets();
}
function addPlanetSatellite(planetName, newSatellite) {
    const planet = findPlanet(planetName);
    if (!planet) {
        alert(`Planet not found!`);
        return;
    }
    planet.satellites.push(newSatellite);
    alert('Satellite added successfully!');
    listPlanets();
}
function removePlanetSatellite(planetName, satelliteToRemove) {
    const planet = findPlanet(planetName);
    if (!planet) {
        alert(`Planet not found!`);
        return;
    }
    if (!planet.satellites.includes(satelliteToRemove)) {
        alert(`Satellite ${satelliteToRemove} is not a satellite of ${planet.name}`);
        return;
    }
    planet.satellites = planet.satellites.filter((satellite) => satellite !== satelliteToRemove);
    alert(`Satellite ${satelliteToRemove} has been removed from ${planet.name}`);
    listPlanets();
}
function listPlanets() {
    const planetListElement = document.getElementById('planet-list');
    if (!planetListElement)
        return;
    planetListElement.innerHTML = '';
    planets.forEach((planet) => {
        const planetElement = document.createElement('div');
        planetElement.className = 'planet';
        const planetInfo = `
			<h2>${planet.name}</h2>
			<p><strong>Coordinates:</strong> ${planet.coordinates.join(', ')}</p>
			<p><strong>Situation:</strong> ${planet.situation}</p>
			<p><strong>Satellites:</strong> ${planet.satellites.join(', ') || 'None'}</p>
		`;
        planetElement.innerHTML = planetInfo;
        planetListElement.appendChild(planetElement);
    });
}
(_a = document.getElementById('register-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('planet-name').value;
    const coordinates = document.getElementById('planet-coordinates').value;
    const situation = document.getElementById('planet-situation').value;
    registerPlanet(name, coordinates, situation);
});
(_b = document.getElementById('update-situation-form')) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('update-planet-name').value;
    const newSituation = document.getElementById('update-planet-situation').value;
    updatePlanetSituation(name, newSituation);
});
(_c = document.getElementById('add-satellite-form')) === null || _c === void 0 ? void 0 : _c.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('satellite-planet-name').value;
    const satellite = document.getElementById('satellite-name').value;
    addPlanetSatellite(name, satellite);
});
(_d = document.getElementById('remove-satellite-form')) === null || _d === void 0 ? void 0 : _d.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('remove-satellite-planet-name').value;
    const satellite = document.getElementById('remove-satellite-name').value;
    removePlanetSatellite(name, satellite);
});
listPlanets();
