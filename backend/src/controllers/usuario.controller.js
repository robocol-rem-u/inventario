const usuarioCtrl = {}
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Usuario = require("../models/Usuario")
const SECRET_KEY= 'sercret';

usuarioCtrl.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find()
    res.json(usuarios)
}

usuarioCtrl.createUsuario = async (req, res) => {
    let lista={
        usuarioUniandes: req.body.usuarioUniandes, 
        nombre: req.body.nombre, 
        contrasenia: bcrypt.hashSync( req.body.contrasenia), //para codificarla contraseña
        admin: req.body.admin, 
        lider: req.body.lider 
    }
    const newUsuario = new Usuario(lista)
    console.log(newUsuario)
    await newUsuario.save()
    const expiresIn= 24*6000
    const accessToken = jwt.sign({usuarioUniandes: req.params.id}, 
        SECRET_KEY, {
            expiresIn: expiresIn
          })
    //lo que se le envirá al front, no es necesario darle al front todos los datos
    const dataUser={
        nombre: newUsuario.nombre, 
        admin: newUsuario.admin, 
        lider: newUsuario.lider, 
        accessToken:accessToken, 
        expiresIn:expiresIn
    }
    res.send({dataUser})
}
usuarioCtrl.loginUser = async (req, res) =>{
    console.log("llego")
    const userData = {
        usuarioUniandes: req.body.usuarioUniandes,
        contrasenia: req.body.contrasenia
    }
    const usuarios = await Usuario.findOne( { usuarioUniandes: userData.usuarioUniandes }, (err, user) => {
      if (err) return res.status(500).send('Server error!');
  
      if (!user) {
        // usuarioUnaindes does not exist
        res.status(409).send({ message: 'no se ha encontrado su usuario Uniandes' });
      } else {
        const resultPassword = bcrypt.compareSync(userData.contrasenia, user.contrasenia);
        if (resultPassword) {
          const expiresIn = 24 * 60 * 60;
          const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });
  
          const dataUser = {
            nombre: user.nombre, 
            admin: user.admin, 
            lider: user.lider, 
            accessToken:accessToken, 
            expiresIn:expiresIn
          }
          res.send({ dataUser });
        } else {
          // password wrong
          res.status(409).send({ message: 'contraseña incorrecta' });
        }
      }
    });
  }
usuarioCtrl.getUsuario = async (req, res) => {
    console.log(req.params)
    const usuario = await Usuario.findById(req.params.id)
    res.json(usuario)
}
usuarioCtrl.deleteUsuario = async (req, res) => {
    console.log(req.params)
    await Usuario.findByIdAndDelete(req.params.id)
    res.send("Delete Usuario")
}
usuarioCtrl.updateUsuario = async (req, res) => {
    console.log(req.params)
    await Usuario.findByIdAndUpdate(req.params.id, req.body)
    res.send("Update Usuario")
}

module.exports = usuarioCtrl