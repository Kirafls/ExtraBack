const express=require("express");
const app= express();

let base =require("../controllers/basecontroler");

app.post('/registro',base.nuevo);

module.exports=app;