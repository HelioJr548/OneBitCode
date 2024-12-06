const playlistModel = require('../models/playlistModel');
const { handleResponse } = require('../utils/utils');

const playlistController = {
	// POST /playlists
	create: (req, res) => {
		const { title, tags, musicTitles } = req.body;
		const result = playlistModel.create(title, tags, musicTitles);
		return handleResponse(res, result, 201, 400);
	},

	// PUT /playlists/:id
	update: (req, res) => {
		const { id } = req.params;
		const updates = req.body;
		const result = playlistModel.update(id, updates);
		return handleResponse(res, result, 200, 404);
	},

	// DELETE /playlists/:id
	delete: (req, res) => {
		const { id } = req.params;
		const result = playlistModel.delete(id);
		return handleResponse(res, result, 200, 404);
	},

	// POST /playlists/:id/add-music
	addMusic: (req, res) => {
		const { id } = req.params;
		const { musicIdsOrTitles } = req.body;
		const result = playlistModel.addMusic(id, musicIdsOrTitles);
		return handleResponse(res, result, 200, 404);
	},

	// GET /playlists
	getAll: (_, res) => {
		const playlists = playlistModel.getAll();
		return res.status(200).json(playlists);
	},

	// GET /playlists/:id
	getById: (req, res) => {
		const { id } = req.params;
		const result = playlistModel.getById(id);
		return handleResponse(res, result, 200, 404);
	},

	// GET /playlists/title/:title
	getByTitle: (req, res) => {
		const { title } = req.params;
		const result = playlistModel.getByTitle(title);
		return handleResponse(res, result, 200, 404);
	},
};

module.exports = playlistController;
