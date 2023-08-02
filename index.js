const express = require("express");  
const app = express();
const puerto=3000;
const mysql=require("mysql");
const {nuevo, mostrar}=require("./consultas");


app.use(express.json());

const connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"userdb",
});

connection.connect((err)=>{
    if(err) throw err;
    console.log("Coneccion con la base de datos");
})

app.get("/",(req,res)=>{
    res.send("Servidor corriendo");
})

app.get("/nuevo",(req,res)=>{
    nuevo(connection,{nombre:'Carlos',apellido:'Alba',carrera:'isc',promedio:'7'},result=>{
        res.send(result);
    });
})

app.get("/mostrar",(req,res)=>{
    mostrar(connection,result=>{
        res.send(result);
    })
})

app.listen(puerto, () => {
  console.log(`Servidor corriendo en el puerto `+puerto);
});
 
