const { findIndex, generateRandomID } = require('../utils/utils');
const musicModel = require('./musicModel');

const playlists = [
	{
		id: 1,
		title: 'Payback 2000',
		tags: ['pop', 'funky', 'hip hop'],
		musics: [],
	},
	{
		id: 2,
		title: 'Payback 2010',
		tags: ['pop', 'funky', 'hip hop'],
		musics: [],
	},
];

function fetchAndValidateMusics(musicIdentifiers, existingMusics = []) {
	const musicIdsToAdd = [];
	const notFoundIds = [];
	const duplicateIds = [];

	(Array.isArray(musicIdentifiers)
		? musicIdentifiers
		: [musicIdentifiers]
	).forEach((identifier) => {
		const music =
			typeof identifier === 'number'
				? musicModel.getById(identifier)
				: musicModel.getByTitle(identifier);

		if (music.success) {
			const isDuplicate = existingMusics.some(
				(existingMusic) => existingMusic.id === music.data.id
			);

			if (isDuplicate) {
				duplicateIds.push(music.data.title);
			} else {
				musicIdsToAdd.push(music.data);
			}
		} else {
			notFoundIds.push(identifier);
		}
	});

	return { musicIdsToAdd, notFoundIds, duplicateIds };
}

const playlistModel = {
	getAll: () => playlists,

	getById: (id) => {
		const playlist = playlists.find((p) => p.id === +id);
		if (!playlist) {
			return { success: false, message: 'Playlist não encontrada.' };
		}
		return { success: true, data: playlist };
	},

	getByTitle: (title) => {
		const playlist = playlists.find((p) => p.title === title);
		if (!playlist) {
			return { success: false, message: 'Playlist não encontrada.' };
		}
		return { success: true, data: playlist };
	},

	create: (title, tags = [], musicIdentifiers = []) => {
		if (!title) {
			return { success: false, message: 'O campo título é obrigatório.' };
		}

		const { musicIdsToAdd, notFoundIds } =
			fetchAndValidateMusics(musicIdentifiers);

		const newPlaylist = {
			id: generateRandomID(),
			title,
			tags,
			musics: musicIdsToAdd,
		};

		playlists.push(newPlaylist);

		let message = 'Playlist criada com sucesso.';
		if (notFoundIds.length) {
			message += ` Algumas músicas não foram encontradas: ${notFoundIds.join(
				', '
			)}.`;
		}

		return { success: true, message, data: newPlaylist };
	},

	update: (id, data) => {
		const index = findIndex(playlists, id);
		if (index === -1) {
			return { success: false, message: 'Registro não encontrado.' };
		}

		playlists[index] = { ...playlists[index], ...data };
		return { success: true, data: playlists[index] };
	},

	delete: (id) => {
		const index = findIndex(playlists, id);
		if (index === -1) {
			return { success: false, message: 'Registro não encontrado.' };
		}

		const [deletedPlaylist] = playlists.splice(index, 1);
		return { success: true, data: deletedPlaylist };
	},

	addMusic: (playlistId, musicIdentifiers) => {
		const playlistResponse = playlistModel.getById(playlistId);
		if (!playlistResponse.success) {
			return { success: false, message: playlistResponse.message };
		}

		const { musicIdsToAdd, notFoundIds, duplicateIds } =
			fetchAndValidateMusics(
				musicIdentifiers,
				playlistResponse.data.musics
			);

		playlistResponse.data.musics.push(...musicIdsToAdd);

		let message = 'Músicas adicionadas com sucesso.';
		if (notFoundIds.length) {
			message += ` Algumas músicas não foram encontradas: ${notFoundIds.join(
				', '
			)}.`;
		}
		if (duplicateIds.length) {
			message += ` As seguintes músicas já estavam na playlist: ${duplicateIds.join(
				', '
			)}.`;
		}

		return { success: true, message, data: playlistResponse.data };
	},
};

module.exports = playlistModel;
