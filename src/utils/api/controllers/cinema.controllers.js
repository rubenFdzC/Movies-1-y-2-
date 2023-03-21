const Cinema = require('../models/cinema.models');


const getCinema = async(req, res) => {
    try {
        const allCinemas = await Cinema.find();
        return res.status(200).json(allCinemas);
       // res.send("get de cinema")
    } catch (error) {
        return res.status(500).json(error);
    }
}
const postCinema = async (req, res) => {
    //res.send("post de cinema")
    try {
        console.log(req.body);
        const  newCinema = new Cinema(req.body);
        const createdCinema = await newCinema.save();
        return res.status(200).json(createdCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
        
}
const putCinema = async (req, res) => {
    try {
        const {id}=req.params;
        const putCinema = new Cinema(req.body);
        putCinema._id = id;

        const updateCinema = await Cinema.findByIdAndUpdate(id, putCinema, {new: true}); //Buscamos por id y actualizamos el elemento
        if(!updateCinema){ 
            return res.status(404).json({ "message": "Cinema not found"});
        }
        return res.status(200).json(updateCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteCinema = (req, res) => {res.send("delete de cinema")}

module.exports= {getCinema,postCinema,putCinema,deleteCinema}