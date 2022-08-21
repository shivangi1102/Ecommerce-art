require('dotenv').config()
const mongoose = require ('mongoose');
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//Routes
const authRoutes =require("./routes/auth");
const userRoutes =require("./routes/user");

const app=express();

//Dtaabase
mongoose.connect(process.env.DATABASE, { 
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true, 
}).then(()=>{
    console.log("DB CONNECTED HELLO")
});


//Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Routes
app.use("/api",authRoutes);
app.use("/api",userRoutes);

//Port
const port = process.env.PORT || 8000  ;

app.listen(port,()=>{
    console.log('app is running');
})