const mongoose = require('mongoose'); 

//const DB_URL = process.env.DB_URL;
//const DB_URL = "mongodb://127.0.0.1:27017/pruebas";  Reutilizo el primer server 

const connect = async () => {
    try {
        const db = await mongoose.connect(process.env.DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });
        const {name , host} = db.connection;
         console.log(`Connected to ${name} DB in host: ${host}`);
    } catch (error) {
        console.log(`He tenido un error al conectar con mi BBSS : ${error}`);
    }
}
module.exports = {connect}