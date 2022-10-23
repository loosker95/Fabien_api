const http = require('http');
const express = require('express');
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const app = express()
const myRoutes = require('./routes/route')
const connectDB = require('./database/connect');

const localhost = "127.0.0.1";

dotenv.config({path:'config.env'});
const port = process.env.PORT || 1010;

app.set('view engine', 'ejs')

connectDB()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/", myRoutes);
app.use("/api/users/", myRoutes)
app.use("/api/add/", myRoutes)
app.use("/api/show/:id", myRoutes)
app.use("/api/update/:id", myRoutes)
app.use("/api/delete/:id", myRoutes)


app.listen(port, () =>{
    console.log(`Your app is running at http://${localhost}:${port}`);
})