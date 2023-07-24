const express = require('express')
const conexion = require('../database/db') //conexion a la base de datos

exports.consultar = (req,res) => {
    conexion.query('select * from pacientes',(error, consulta) => {
        if(error){
            console.log("error consultando la tabla pacientes: "+ error)
            return
        }
        //res.send(consulta)
        res.render('home',{consulta1:consulta})
    })
}


exports.consultarD = (req,res) => {
    conexion.query('select * from doctores',(error, consulta) => {
        if(error){
            console.log("error consultando la tabla doctores: "+ error)
            return
        }
        //res.send(consulta)
        res.render('home',{consulta2:consulta})
    })
}

//*****************************************************PACIENTES************************************************************************************//

//CONSULTAR PACIENTES
exports.consultarPaciente = (req,res) => {
    conexion.query('select * from pacientes',(error, consulta) => {
        if(error){
            console.log("error consultando la tabla pacientes: "+ error)
            return
        }
        //res.send(consulta)
        res.render('formPacient',{consulta1:consulta})
    })
}

//SALVAR pacientes
exports.save = (req,res) => {
    const nombre = req.body.nombre
    const ncedula = req.body.ncedula
    const apellido = req.body.apellido
    const edad = req.body.edad
    const telefono = req.body.telefono
    //console.log(req.body, nombre, cedula, apellido, edad,telefono)
    var comando = "insert into pacientes (nombre, ncedula, apellido, edad,telefono) values ('"
    comando += nombre + "',"+ncedula+",'"+apellido+"','"+edad+"','"+telefono+"')"
    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.redirect('pacientes')
        }
    })
}

//EDITAR pacientes
exports.consultaruno = (req,res) => {
    const id = req.params.id
    console.log(id)
    conexion.query('select * from pacientes where id='+id,(error, consulta) => {
        if(error){
            console.log("error consultando el id en la tabla pacientes: "+ error)
            return
        }
        //res.send(consulta)
        res.render('editP',{pacientes:consulta[0]})
    })
}

//ACTUALIZAR pacientes
exports.actualizar = (req,res) => {
    const id = req.body.id
    const nombre = req.body.nombre
    const ncedula = req.body.ncedula
    const apellido = req.body.apellido
    const edad = req.body.edad
    const telefono = req.body.telefono
    //console.log(req.body, nombre, edad, genero, email)
    var comando = "update pacientes set nombre='" + nombre + "', ncedula=" + ncedula;
    comando += ", apellido='" + apellido + "', edad=" + edad + ", telefono=" + telefono;
    comando += " WHERE id=" + id;

    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.redirect('/pacientes')
        }
    })
}

//BORRAR Pacientes
exports.delete = (req,res) => {
    const id = req.params.id
    var comando = "delete from pacientes where id="+id
    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.redirect('/pacientes')
        }
    })
}



//Apis PACIENTE*************************
exports.api_consultatodos = (req,res) => {
    conexion.query('select * from pacientes',(error, consulta) => {
        if(error){
            console.log("error consultando la tabla paciente: "+ error)
            return
        }
        res.send(consulta)
    })
}


exports.api_consultauno = (req,res) => {
    const id = req.params.id
    console.log(id)
    conexion.query('select * from pacientes where id='+id,(error, consulta) => {
        if(error){
            console.log("error consultando el id en la tabla persona: "+ error)
            return
        }
        res.send(consulta)
    })
}

//consultar Paciente
exports.api_agregar = (req,res) => {
    const nombre = req.query.nombre
    const ncedula = req.query.ncedula
    const apellido = req.query.apellido
    const edad = req.query.edad
    const telefono = req.query.telefono
    //console.log(req.body, nombre, cedula, apellido, edad,telefono)
    var comando = "insert into pacientes (nombre, ncedula, apellido, edad,telefono) values ('"
    comando += nombre + "',"+ncedula+",'"+apellido+"','"+edad+"','"+telefono+"')"
    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.send('Registro agregado correctamente EXITOSO')
        }
    })
}


//ACTUALIZAR paciente (api)
exports.api_actualizar = (req,res) => {
    const id = req.query.id
    const nombre = req.query.nombre
    const ncedula = req.query.ncedula
    const apellido = req.query.apellido
    const edad = req.query.edad
    const telefono = req.query.telefono
    //console.log(req.body, nombre, edad, genero, email)
    var comando = "update pacientes set nombre='" + nombre + "', ncedula=" + ncedula;
    comando += ", apellido='" + apellido + "', edad=" + edad + ", telefono=" + telefono;
    comando += " WHERE id=" + id;

    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.send('Registro Actualizado EXITOSO 😃🚀 ')
        }
    })
}


//BORRAR Paciente (API)
exports.api_borrar = (req,res) => {
    const id = req.query.id
    var comando = "delete from pacientes where id="+id
    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.send('Registro Borrado 😃🚀😃🚀')
        }
    })
}


//*****************************************************DOCTORES************************************************************************************//


//CONSULTAR LISTA DOCTORES
exports.consultoDoctores = (req,res) => {
    conexion.query('select * from doctores',(error, consulta) => {
        if(error){
            console.log("error consultando la tabla doctores: "+ error)
            return
        }
        //res.send(consulta)
        res.render('formDoctor',{consulta2:consulta})
    })
}

//SALVAR DOCTORES
exports.saveD = (req,res) => {
    const nombre = req.body.nombre
    const apellido = req.body.apellido
    const especialidad = req.body.especialidad
    const consultorio = req.body.consultorio
    const correo = req.body.correo
    var comando = "insert into doctores (nombre, apellido, especialidad, consultorio,correo) values ('"
    comando += nombre + "',"+apellido+",'"+especialidad+"','"+consultorio+"','"+correo+"')"
    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.redirect('doctores')
        }
    })
}


//EDITAR doctores
exports.consultoDrUno = (req,res) => {
    const id = req.params.id
    console.log(id)
    conexion.query('select * from doctores where id='+id,(error, consulta) => {
        if(error){
            console.log("error consultando el id en la tabla doctores: "+ error)
            return
        }
        //res.send(consulta)
        res.render('doctores',{doctores:consulta[0]})
    })
}


//ACTUALIZAR DOCTORES
exports.actualizardoctor = (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const especialidad = req.body.especialidad;
    const consultorio = req.body.consultorio;
    const correo = req.body.correo;
    
    var comando = "UPDATE doctores SET nombre='" + nombre + "', apellido='" + apellido + "', especialidad='" + especialidad;
    comando += "', consultorio='" + consultorio + "', correo='" + correo + "' WHERE id=" + id;

    console.log(comando);
    
    conexion.query(comando, (error, resultado) => {
        if (error) {
            console.log(error);
            return;
        } else {
            res.redirect('/doctores');
        }
    });
}


//BORRAR Doctores
exports.deletedoctor = (req,res) => {
    const id = req.params.id
    var comando = "delete from doctores where id="+id
    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.redirect('/pacientes')
        }
    })
}

//Apis Doctor*************************

exports.api_consultatodosD = (req,res) => {
    conexion.query('select * from doctores',(error, consulta) => {
        if(error){
            console.log("error consultando la tabla doctores: "+ error)
            return
        }
        res.send(consulta)
    })
}


exports.api_consultaunoD = (req,res) => {
    const id = req.params.id
    console.log(id)
    conexion.query('select * from doctores where id='+id,(error, consulta) => {
        if(error){
            console.log("error consultando el id en la tabla doctores: "+ error)
            return
        }
        res.send(consulta)
    })
}

//consultar Paciente
exports.api_agregarD = (req,res) => {
    const nombre = req.query.nombre
    const apellido = req.query.apellido
    const especialidad = req.query.especialidad
    const consultorio = req.query.consultorio
    const correo = req.query.correo
    var comando = "insert into doctores (nombre, apellido, especialidad, consultorio,correo) values ('"
    comando += nombre + "',"+apellido+",'"+especialidad+"','"+consultorio+"','"+correo+"')"
    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.send('Registro agregado correctamente EXITOSO')
        }
    })
}


//ACTUALIZAR paciente (api)
exports.api_actualizarD = (req,res) => {
    const id = req.query.id
    const nombre = req.query.nombre
    const apellido = req.query.apellido
    const especialidad = req.query.especialidad
    const consultorio = req.query.consultorio
    const correo = req.query.correo
    var comando = "update doctores set nombre='" + nombre + "', apellido=" + apellido;
    comando += ", especialidad='" + especialidad + "', consultorio=" + consultorio + ", correo=" + correo;
    comando += " WHERE id=" + id;

    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.send('Registro Actualizado EXITOSO 😃🚀 ')
        }
    })
}


//BORRAR Paciente (API)
exports.api_borrarD = (req,res) => {
    const id = req.query.id
    var comando = "delete from doctores where id="+id
    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.send('Registro Borrado 😃🚀😃🚀😃🚀')
        }
    })
}