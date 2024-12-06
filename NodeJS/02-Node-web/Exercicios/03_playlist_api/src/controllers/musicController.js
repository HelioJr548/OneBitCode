const musicModel = require('../models/musicModel');
const playlistModel = require('../models/playlistModel');
const { handleResponse } = require('../utils/utils');

const musicController = {
	// POST /musics
	create: (req, res) => {
		const { title, year, artist, album } = req.body;
		const result = musicModel.create(title, year, artist, album);
		return handleResponse(res, result, 201);
	},

	// PUT /musics/:id
	update: (req, res) => {
		const { id } = req.params;
		const result = musicModel.update(id, req.body);
		return handleResponse(res, result, 200, 404);
	},

	// DELETE /musics/:id
	delete: (req, res) => {
		const { id } = req.params;
		const result = musicModel.delete(id);
		playlistModel.removeMusicFromAllPlaylists(id);
		return handleResponse(res, result, 200, 404);
	},

	// GET /musics
	getAll: (_, res) => {
		const musics = musicModel.getAll();
		return res.status(200).json(musics);
	},

	// GET /musics/:id
	getById: (req, res) => {
		const { id } = req.params;
		const result = musicModel.getById(id);
		return handleResponse(res, result, 200, 404);
	},

	// GET /musics/title/:title
	getByTitle: (req, res) => {
		const { title } = req.params;
		const result = musicModel.getByTitle(title);
		return handleResponse(res, result, 200, 404);
	},
};

module.exports = musicController;
