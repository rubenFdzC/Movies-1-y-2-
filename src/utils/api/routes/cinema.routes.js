const express = require('express');
const {getCinema,postCinema,putCinema,deleteCinema}= require('../controllers/cinema.controllers');
const routerCinema = express.Router();

routerCinema.get('/',getCinema )
routerCinema.delete('/',deleteCinema )
routerCinema.put('/',putCinema )
routerCinema.post('/',postCinema )

module.exports = routerCinema;