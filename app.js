// npm init --yes 

// npm install express ejs mysql dotenv
// npm install -g nodemon  //instalamos de forma global 

const express = require('express')
const server = express()


server.set("view engine", "ejs")

const PORT = process.env.PORT || 8044
const conexion = require('./database/db')
const crud = require('./controller/crud')


server.use(express.urlencoded({extended:false}))
server.use(express.json())
server.use(express.static('./database'))    //modelo
server.use(express.static('./views'))       //vista
server.use(express.static('./controller'))  //controlador


//Inicio Rutas PACIENTE
server.get('/', crud.consultar)
server.get('/crear', (req,res) =>{
    res.render('createP')
})


//Inicio Rutas DOCTORES
server.get('/', crud.consultarD)
server.get('/crearD', (req,res) =>{
    res.render('createD')
})




server.get('/1',(req,res)=>{
    res.render('formPacient')
})

server.get('/1',(req,res)=>{
    res.render('formDoctor')
})


server.get('/1',(req,res)=>{
    res.render('formCita')
})
///******************************************************************************************************************************************************** */
//PACIENTES
server.post('/salvar',crud.save) //crear
server.get('/editar/:id', crud.consultaruno) //consultar
server.get('/pacientes', crud.consultarPaciente) 
server.post('/actualizar',crud.actualizar)
server.get('/borrar/:id',crud.delete)


//DOCTORES
server.post('/salvarP',crud.saveD)
server.get('/editarD/:id', crud.consultoDrUno)
server.get('/doctores', crud.consultoDoctores)
server.post('/actualizardoctor',crud.actualizardoctor)
server.get('/borrardoc/:id',crud.deletedoctor)





//Rutas Api pacientes
server.get('/api/pacientes', crud.api_consultatodos)
server.get('/api/pacientes/:id', crud.api_consultauno)
server.post('/api/agregar/',crud.api_agregar)
server.put('/api/actualizar/', crud.api_actualizar)
server.delete('/api/borrar/:id', crud.api_borrar)



//Rutas Api Doctores
server.get('/api/doctores', crud.api_consultatodosD)
server.get('/api/doctores/:id', crud.api_consultaunoD)
server.post('/api/agregar/',crud.api_agregarD)
server.put('/api/actualizar/', crud.api_actualizarD)
server.delete('/api/borrar/:id', crud.api_borrarD)








// Controlar no encontrado
server.get('/*',(req,res)=>{
    res.render('notfound')
})    

server.listen(PORT, () => {
    console.log("servidor funcionando en http://localhost:"+PORT)
})




