const musicModel = require('../models/musicModel');

const musicController = {
	// GET /musics
	getAll: (req, res) => {
		const musics = musicModel.getAll();
		return res.status(200).json(musics);
	},

	// GET /musics/:id
	getById: (req, res) => {
		const { id } = req.params;
		const result = musicModel.getById(id);
		if (!result.success) {
			return res.status(404).json({ message: result.message });
		}
		return res.status(200).json(result.data);
	},
	// GET /musics/:title
	getByTitle: (req, res) => {
		const { title } = req.params;
		const result = musicModel.getByTitle(title);
		if (!result.success) {
			return res.status(404).json({ message: result.message });
		}
		return res.status(200).json(result.data);
	},

	// POST /musics
	create: (req, res) => {
		const { title, year, artist, album } = req.body;
		const result = musicModel.create(title, year, artist, album);

		if (!result.success) {
			return res.status(400).json({ message: result.message });
		}

		return res.status(201).json(result.data);
	},

	// PUT /musics/:id
	update: (req, res) => {
		const { id } = req.params;
		const result = musicModel.update(id, req.body);

		if (!result.success) {
			return res.status(404).json({ message: result.message });
		}

		return res.status(200).json(result.data);
	},

	// DELETE /musics/:id
	delete: (req, res) => {
		const { id } = req.params;
		const result = musicModel.delete(id);

		if (!result.success) {
			return res.status(404).json({ message: result.message });
		}

		return res.status(200).json(result.data);
	},
};

module.exports = musicController;
