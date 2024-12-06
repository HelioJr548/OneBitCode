const { generateRandomID, findIndex } = require('../utils/utils');

//  Music {id:number, title:string, year:number, artist:string, album:string}
const musics = [
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

const musicModel = {
	getAll: () => musics,

	getById: (id) => {
		const music = musics.find((music) => music.id === +id);
		if (!music) {
			return { success: false, message: 'Música não encontrada.' };
		}
		return { success: true, data: music };
	},

	getByTitle: (title) => {
		const music = musics.find((music) => music.title === title);
		if (!music) {
			return { success: false, message: 'Música não encontrada.' };
		}
		return { success: true, data: music };
	},

	create: (title, year, artist, album) => {
		if (!title || !year || !artist) {
			return {
				success: false,
				message: 'Todos os campos obrigatórios devem ser preenchidos.',
			};
		}

		const newMusic = {
			id: generateRandomID(),
			title,
			year,
			artist,
			album: album ?? '',
		};

		musics.push(newMusic);
		return { success: true, data: newMusic };
	},

	update: (id, data) => {
		const index = findIndex(musics, id);
		if (index === -1) {
			return { success: false, message: 'Registro não encontrado.' };
		}

		musics[index] = { ...musics[index], ...data };
		return { success: true, data: musics[index] };
	},

	delete: (id) => {
		const index = findIndex(musics, id);
		if (index === -1) {
			return { success: false, message: 'Registro não encontrado.' };
		}

		const deletedMusic = musics.splice(index, 1)[0];
		return { success: true, data: deletedMusic };
	},
};

module.exports = musicModel;
