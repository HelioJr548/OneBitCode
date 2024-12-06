const playlistModel = require('../models/playlistModel');

const playlistController = {
	getAll: (req, res) => {
		const playlists = playlistModel.getAll();
		return res.status(200).json(playlists);
	},

	getById: (req, res) => {
		const { id } = req.params;
		const result = playlistModel.getById(id);

		if (!result.success) {
			return res.status(404).json({ message: result.message });
		}
		return res.status(200).json(result.data);
	},
	getByTitle: (req, res) => {
		const { title } = req.params;
		const result = playlistModel.getByTitle(title);

		if (!result.success) {
			return res.status(404).json({ message: result.message });
		}
		return res.status(200).json(result.data);
	},

	create: (req, res) => {
		const { title, tags, musicTitles } = req.body;
		const result = playlistModel.create(title, tags, musicTitles);

		if (!result.success) {
			return res.status(400).json({ message: result.message });
		}
		return res
			.status(201)
			.json({ message: result.message, data: result.data });
	},

	update: (req, res) => {
		const { id } = req.params;
		const data = req.body;
		const result = playlistModel.update(id, data);

		if (!result.success) {
			return res.status(404).json(result);
		}
		return res.status(200).json(result.data);
	},

	delete: (req, res) => {
		const { id } = req.params;
		const result = playlistModel.delete(id);

		if (!result.success) {
			return res.status(404).json(result);
		}
		return res.status(200).json(result.data);
	},

	addMusic: (req, res) => {
		const { playlistId, musicId } = req.body;
		const result = playlistModel.addMusic(playlistId, musicId);

		if (!result.success) {
			return res.status(404).json(result);
		}
		return res
			.status(200)
			.json({ message: result.message, data: result.data });
	},
};

module.exports = playlistController;
