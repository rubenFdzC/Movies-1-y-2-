const express = require('express');

const routerMovies = express.Router(); // enrutador para conectar con el endpoint


const {getMovies,getMoviesById,postMovies,deleteMovies,putMovie,getMovieByYear} = require('../controllers/movies.controllers');
routerMovies.get('/',getMovies )
routerMovies.get('/movies/year/:year', getMovieByYear)
routerMovies.get('/movies/:id',getMoviesById)
routerMovies.post('/',postMovies )
routerMovies.delete('/',deleteMovies )
routerMovies.put('/',putMovie )

module.exports = routerMovies;


