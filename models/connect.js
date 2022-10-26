const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config({path:'config.env'});

const dbInfo = process.env.DATABASE_NAME;

function connectDB(){
    mongoose.connect(dbInfo, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectDB;
