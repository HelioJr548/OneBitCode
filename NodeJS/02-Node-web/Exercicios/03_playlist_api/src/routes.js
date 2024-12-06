const express = require('express');
const musicController = require('./controllers/musicController');
const playlistController = require('./controllers/playlistController');

const router = express.Router();

// Musics Routes
router.get('/musics', musicController.getAll); // Obter todas as musicas
router.get('/musics/:id', musicController.getById); // Obter uma musica por ID
router.get('/musics/title/:title', musicController.getByTitle); // Obter uma musica por Titulo
router.post('/musics', musicController.create); // Criar uma nova musica
router.put('/musics/:id', musicController.update); // Atualizar uma musica por ID
router.delete('/musics/:id', musicController.delete); // Excluir uma musica por ID

// Playlists Routes
router.get('/playlists', playlistController.getAll); // Obter todas as playlists
router.get('/playlists/:id', playlistController.getById); // Obter uma playlist por ID
router.get('/playlists/title/:title', playlistController.getByTitle); // Obter uma playlist por Titulo
router.post('/playlists', playlistController.create); // Criar uma nova playlist
router.put('/playlists/:id', playlistController.update); // Atualizar uma playlist por ID
router.delete('/playlists/:id', playlistController.delete); // Excluir uma playlist por ID
router.post('/playlists/add-music', playlistController.addMusic); // Adicionar música a uma playlist

module.exports = router;
