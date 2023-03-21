const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Schema de movies que exportaremos para poder meter a la base de datos 
const movieSchema = new Schema(
    {
    tittle:{type: String, required:true},
    director:{type: String, required:true},
    year:{type: String, required:true},
    genre:{type: String, required:true},
},
{timestamps:true}
//collection:"Movies"
)
const Movie = mongoose.model('movie', movieSchema);
module.exports = Movie;