// Types auxiliares
type PlanetSituation = 'Inhabited' | 'Livable' | 'Uninhabitable' | 'Unexplored';
type PlanetCoordinates = [number, number, number, number];

type Planet = {
	name: string;
	coordinates: PlanetCoordinates;
	situation: PlanetSituation;
	satellites: string[];
};

const planets: Planet[] = [];

function findPlanet(planetName: string): Planet | undefined {
	return planets.find((planet) => planet.name === planetName);
}

// Função 1: Salvar um objeto planet
function registerPlanet(
	name: string,
	coordinatesStr: string,
	situation: PlanetSituation
): void {
	const coordinates = coordinatesStr.split(',').map(Number) as [
		number,
		number,
		number,
		number
	];

	const planet = findPlanet(name);
	if (planet) {
		alert(`Planet already registered`);
		return;
	}

	const newPlanet: Planet = {
		name,
		coordinates,
		situation,
		satellites: [],
	};

	planets.push(newPlanet);
	alert('Planet registered successfully!');
	listPlanets(); // Update the planet list
}

// Função 2: Atualizar situação de um determinado planeta
function updatePlanetSituation(
	planetName: string,
	newSituation: PlanetSituation
): void {
	const planet = findPlanet(planetName);

	if (!planet) {
		alert(`Planet not found!`);
		return;
	}

	planet.situation = newSituation;
	alert('Planet situation updated successfully!');
	listPlanets(); // Update the planet list
}

// Função 3: Adicionar satélite a um planeta
function addPlanetSatellite(planetName: string, newSatellite: string) {
	const planet = findPlanet(planetName);

	if (!planet) {
		alert(`Planet not found!`);
		return;
	}

	planet.satellites.push(newSatellite);
	alert('Satellite added successfully!');
	listPlanets(); // Update the planet list
}

// Função 4: Remover satélite do planeta
function removePlanetSatellite(planetName: string, satelliteToRemove: string) {
	const planet = findPlanet(planetName);

	if (!planet) {
		alert(`Planet not found!`);
		return;
	}

	if (!planet.satellites.includes(satelliteToRemove)) {
		alert(
			`Satellite ${satelliteToRemove} is not a satellite of ${planet.name}`
		);
		return;
	}

	planet.satellites = planet.satellites.filter(
		(satellite) => satellite !== satelliteToRemove
	);
	alert(
		`Satellite ${satelliteToRemove} has been removed from ${planet.name}`
	);
	listPlanets(); // Update the planet list
}

// Função 5: Listar planetas e suas informações
function listPlanets() {
	const planetListElement = document.getElementById('planet-list');
	if (!planetListElement) return;

	planetListElement.innerHTML = ''; // Limpa a lista de planetas

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

// Add event listeners for form submissions
document.getElementById('register-form')?.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = (document.getElementById('planet-name') as HTMLInputElement).value;
	const coordinates = (document.getElementById('planet-coordinates') as HTMLInputElement).value;
	const situation = (document.getElementById('planet-situation') as HTMLSelectElement).value as PlanetSituation;
	registerPlanet(name, coordinates, situation);
});

document.getElementById('update-situation-form')?.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = (document.getElementById('update-planet-name') as HTMLInputElement).value;
	const newSituation = (document.getElementById('update-planet-situation') as HTMLSelectElement).value as PlanetSituation;
	updatePlanetSituation(name, newSituation);
});

document.getElementById('add-satellite-form')?.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = (document.getElementById('satellite-planet-name') as HTMLInputElement).value;
	const satellite = (document.getElementById('satellite-name') as HTMLInputElement).value;
	addPlanetSatellite(name, satellite);
});

document.getElementById('remove-satellite-form')?.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = (document.getElementById('remove-satellite-planet-name') as HTMLInputElement).value;
	const satellite = (document.getElementById('remove-satellite-name') as HTMLInputElement).value;
	removePlanetSatellite(name, satellite);
});

// Initial list of planets
listPlanets();
