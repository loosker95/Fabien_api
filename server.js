const http = require('http');
const express = require('express');
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const app = express()
const myRoutes = require('./routes/v1/route')
const connectDB = require('./models/connect');

const localhost = "127.0.0.1";

dotenv.config({path:'config.env'});
const port = process.env.PORT || 1010;

connectDB()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/", myRoutes);


app.listen(port, () =>{
    console.log(`Your app is running at http://${localhost}:${port}`);
})