const express = require("express");
const {connect} = require('./src/utils/database')
const dotenv = require('dotenv');
const routerMovies = require('./src/utils/api/routes/movies.routes');
const routerCinema = require('./src/utils/api/routes/cinema.routes');
dotenv.config();
const PORT = process.env || 6500;

const app = express();
connect();

app.use(express.json());  //esto nos sirve para recibir en resp objetos tipo json 
app.use(express.urlencoded({extended:true}));

app.use('/movies', routerMovies);  // conectamos enrutador con el enpoint en este caso para server de peliculas
app.use('/cines', routerCinema);

app.listen(PORT, () => console.log(`listening on : http://localhost${PORT}`)); //esto se pone al principio pero acaba al final 