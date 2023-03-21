const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Schema de cinema que exportaremos para poder meter a la base de datos 
const cinemaSchema = new Schema(
    {
    name:{type: String, required:true},
    location:{type: String, required:true},
    movies:{type: Array, required:true},
},
{timestamps:true}
//collection:"Movies"
)
const Cine = mongoose.model('cine', cinemaSchema);
module.exports = Cine;