const mysql =require("mysql");

function nuevo(conection,data,callback){
    let insertQuery="INSERT INTO `user`(`Nombre`, `Apellido`, `Carrera`, `Promedio`) VALUES (?,?,?,?)";
    let query =mysql.format(insertQuery, [data.nombre,data.apellido,data.carrera,data.promedio]);
    conection.query(query,function(err,result){
        if(err) throw err;
        callback(result);
    });
}

function mostrar(conection,callback){
    let query="SELECT * FROM `user`";
    conection.query(query,function(err,result){
        if(err) throw err;
        callback(result);
    });
}
module.exports={nuevo,mostrar};