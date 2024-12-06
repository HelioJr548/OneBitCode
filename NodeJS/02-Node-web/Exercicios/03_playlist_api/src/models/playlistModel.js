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

function processMusicIdentifiers(musicIdentifiers, existingMusics = []) {
	const validMusics = [];
	const notFound = [];
	const duplicates = [];

	const identifiersArray = Array.isArray(musicIdentifiers)
		? musicIdentifiers
		: [musicIdentifiers];

	identifiersArray.forEach((identifier) => {
		const music =
			typeof identifier === 'number'
				? musicModel.getById(identifier)
				: musicModel.getByTitle(identifier);

		if (music.success) {
			const isDuplicate = existingMusics.some(
				(existing) => existing.id === music.data.id
			);

			if (isDuplicate) {
				duplicates.push(music.data.title);
			} else {
				validMusics.push(music.data);
			}
		} else {
			notFound.push(identifier);
		}
	});

	return { validMusics, notFound, duplicates };
}

const playlistModel = {
	getAll: () => playlists,

	getById: (id) => {
		const playlist = playlists.find((p) => p.id === +id);
		return playlist
			? { success: true, data: playlist }
			: { success: false, message: 'Playlist não encontrada.' };
	},

	getByTitle: (title) => {
		const playlist = playlists.find((p) => p.title === title);
		return playlist
			? { success: true, data: playlist }
			: { success: false, message: 'Playlist não encontrada.' };
	},

	create: (title, tags = [], musicIdentifiers = []) => {
		if (!title) {
			return { success: false, message: 'O título é obrigatório.' };
		}

		const { validMusics, notFound } =
			processMusicIdentifiers(musicIdentifiers);

		const newPlaylist = {
			id: generateRandomID(),
			title,
			tags,
			musics: validMusics,
		};

		playlists.push(newPlaylist);

		let message = 'Playlist criada com sucesso.';
		if (notFound.length) {
			message += ` Algumas músicas não foram encontradas: ${notFound.join(
				', '
			)}.`;
		}

		return { success: true, message, data: newPlaylist };
	},

	update: (id, updates) => {
		const index = findIndex(playlists, id);
		if (index === -1) {
			return { success: false, message: 'Playlist não encontrada.' };
		}

		playlists[index] = { ...playlists[index], ...updates };
		return { success: true, data: playlists[index] };
	},

	delete: (id) => {
		const index = findIndex(playlists, id);
		if (index === -1) {
			return { success: false, message: 'Playlist não encontrada.' };
		}

		const [deleted] = playlists.splice(index, 1);
		return { success: true, data: deleted };
	},

	addMusic: (playlistId, musicIdentifiers) => {
		const playlistResult = playlistModel.getById(playlistId);
		if (!playlistResult.success) {
			return { success: false, message: playlistResult.message };
		}

		const playlist = playlistResult.data;
		const { validMusics, notFound, duplicates } = processMusicIdentifiers(
			musicIdentifiers,
			playlist.musics
		);

		playlist.musics.push(...validMusics);

		let message = 'Músicas adicionadas com sucesso.';
		if (notFound.length) {
			message += ` Algumas músicas não foram encontradas: ${notFound.join(
				', '
			)}.`;
		}
		if (duplicates.length) {
			message += ` Já estavam na playlist: ${duplicates.join(', ')}.`;
		}

		return { success: true, message, data: playlist };
	},

	removeMusicFromAllPlaylists: (musicId) => {
		playlists.forEach((playlist) => {
			playlist.musics = playlist.musics.filter(
				(music) => music.id !== +musicId
			);
		});
	},
};

module.exports = playlistModel;
