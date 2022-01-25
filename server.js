const express = require ("express");
const connectDB = require('./config/dbconnect')
const app = express();

require('dotenv').config()

//connect to DB
connectDB ();


 //Create routes
 

app.use(express.json())
app.use("/user",require("./models/routes/user"));
app.use("/Productts",require("./models/routes/Productt"));


//SERVER

const PORT =process.env.PORT;
app.listen(PORT ,(err)=> err ?
console.log(err):console.log(`server is running on ${PORT}`));