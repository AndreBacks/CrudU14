const mysql = require('mysql')

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root', //admin
    password:'', //admin
    database:'crudunidad14'
})

conexion.connect((error) => {
    if(error){
        console.log(" Cuidado Error de conexion: "+error)
        return
    }
    console.log("Conexion a mysql exitosa")
})

module.exports = conexion 