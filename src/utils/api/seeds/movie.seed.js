const mongoose = require('mongoose');

const Movie = require('../models/movies.models');

const arrayMovies =[
    {
      title: 'The Matrix',
      director: 'Hermanas Wachowski',
      year: 1999,
      genre: 'Acción',
    },
    {
      title: 'The Matrix Reloaded',
      director: 'Hermanas Wachowski',
      year: 2003,
      genre: 'Acción',
    },
    {
      title: 'Buscando a Nemo',
      director: 'Andrew Stanton',
      year: 2003,
      genre: 'Animación',
    },
    {
      title: 'Buscando a Dory',
      director: 'Andrew Stanton',
      year: 2016,
      genre: 'Animación',
    },
    {
      title: 'Interestelar',
      director: 'Christopher Nolan',
      year: 2014,
      genre: 'Ciencia ficción',
    },
    {
      title: '50 primeras citas',
      director: 'Peter Segal',
      year: 2004,
      genre: 'Comedia romántica',
    },
  ];
  //const DB_URL = process.env.DB_URL
  //mongoose.connect(DB_URL).then(async()=>{ })
mongoose.connect("mongodb+srv://root:root@cluster0.kbqb68t.mongodb.net/movies?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(async ()=>{
    const allmovies = await Movie.find();
    if(allmovies.length > 0) {
        await Movie.collection.drop()
    console.log("pelicula eliminada de la lista");
    };
})
.catch((err)=>console.log("error borrando peliculas",err))
.then(async () =>{
  const moviesMap = arrayMovies.map((movie) => new Movie(movie));  // encontrar que variable mapear 
  await Movie.insertMany(moviesMap);
  console.log("peliculas insertadas");
  })
  .catch((err)=>console.log("error borrando peliculas",err))
  .finally(()=> mongoose.disconnect());