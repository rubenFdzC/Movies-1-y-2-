// Defino todo lo que se puede hacer en la BBDD (funciones , sulen ponerse todas siempre)

const Movie = require("../models/movies.models");

/*const getMovies = (req,res) => {
    res.send("Este es el get de movies (lee información de la BBDD y se la devuelve al usuario)")
};*/

/*routerMovies.get('/:id', (req,res) => {  // este lo dejo por si especificamos y ordenamos las peliculas por categorías
    const {id} = req.params;
    res.send("Este es el get de movies por ID" + id)
});*/

const getMovies = async (req,res) => {
    try {
        const allmovies = await Movie.find();
        return res.status(200).json(allmovies);
        
    } catch (error) {
        return res.status(500).json(error);
    }
};
const getMoviesById = async (req,res) => {
    try {
        const {Movie}= req.params;
        const allmovies = await Movie.find({id: id});
        return res.status(200).json(allmovies);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postMovies = async (req,res) => {
    try {
        console.log(req.body);
        const{tittle,director,year,genre} = req.body;
        const newMovie = new Movie({tittle,director,year,genre});
        const createdMovie = await newMovie.save();
        return res.status(201).json(createdMovie);
        }

     catch (error) {
        return res.status(500).json(error);
    }
};
const putMovie = async (req, res) => {
    try {
        const {id}=req.params;
        const putMovie = new Movie(req.body);
        putMovie._id = id;

        const updateMovie = await Movie.findByIdAndUpdate(id, putMovie, {new: true}); //Buscamos por id y actualizamos el elemento
        if(!updateMovie){ 
            return res.status(404).json({ "message": "Movie not found"});
        }
        return res.status(200).json(updateMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
};
const sendMovies = async (req,res) => {
    try {

    }
     catch (error) {
        return res.status(500).json(error);
    };
};

const deleteMovies = async (req,res) => {
   try {
     res.send("Este es el delete de movies(Elimina uno o más elementos de la BBDD)")
   } catch (error) {
    return res.status(500).json(error);
   }
};
const getMovieByYear = (async(req,res)=> {
    try {
        const {year} = req.params;
        const allmovies = await Movie.find({year:year})
        return res.status(200).json(allmovies);
        //console.log(year);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = {getMovies,postMovies,sendMovies,deleteMovies,getMoviesById,putMovie,getMovieByYear};

