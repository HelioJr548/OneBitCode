const { generateRandomID, findIndex } = require('../utils/utils');

// Modelo da música: { id: number, title: string, year: number, artist: string, album: string }
const musicCollection = [
	{
		id: 1,
		title: 'Caminho do Sol',
		year: 2019,
		artist: 'Luiza Silva',
		album: 'Horizontes',
	},
	{
		id: 2,
		title: 'Tempestade de Verão',
		year: 2021,
		artist: 'Pedro Luz',
		album: 'Estação Quente',
	},
];

const createResponse = (success, data = null, message = '') => ({
	success,
	data,
	message,
});

const musicModel = {
	getAll: () => musicCollection,

	getById: (id) => {
		const music = musicCollection.find((item) => item.id === +id);
		return music
			? createResponse(true, music)
			: createResponse(false, null, 'Música não encontrada.');
	},

	getByTitle: (title) => {
		const music = musicCollection.find((item) => item.title === title);
		return music
			? createResponse(true, music)
			: createResponse(false, null, 'Música não encontrada.');
	},

	create: (title, year, artist, album = '') => {
		if (!title || !year || !artist) {
			return createResponse(
				false,
				null,
				'Todos os campos obrigatórios devem ser preenchidos.'
			);
		}

		const newMusic = {
			id: generateRandomID(),
			title,
			year,
			artist,
			album,
		};

		musicCollection.push(newMusic);
		return createResponse(true, newMusic);
	},

	update: (id, updateData) => {
		const index = findIndex(musicCollection, id);
		if (index === -1) {
			return createResponse(false, null, 'Registro não encontrado.');
		}

		const updatedMusic = { ...musicCollection[index], ...updateData };
		musicCollection[index] = updatedMusic;
		return createResponse(true, updatedMusic);
	},

	delete: (id) => {
		const index = findIndex(musicCollection, id);
		if (index === -1) {
			return createResponse(false, null, 'Registro não encontrado.');
		}

		const [removedMusic] = musicCollection.splice(index, 1);
		return createResponse(true, removedMusic);
	},
};

module.exports = musicModel;
