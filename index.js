const express = require("express");  
const app = express();
const puerto=3000;
const mysql=require("mysql");
const {nuevo, mostrar}=require("./consultas");
const cors=require('cors');
const bodyparse=require("body-parser");


app.use(cors());
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended:false}));

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

app.use(require("./routes/coreoRuta"));


app.get("/",(req,res)=>{
    res.send("Servidor corriendo");
})

app.post("/nuevo",(req,res)=>{
    let nombre=req.body.nombre;
    let apellido=req.body.apellido;
    let carrera=req.body.carrera;
    let fecha=req.body.fecha;
    let promedio=req.body.promedio;
    let prepa=req.body.prepa;
    nuevo(connection,{nombre:nombre,apellido:apellido,prepa:prepa,carrera:carrera,fecha:fecha,promedio:promedio},result=>{
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
 
