const mensajesCtrl = {}

const Mensaje = require("../models/Mensaje")

mensajesCtrl.getMensajes = async (req, res) => {
	const mensajes = await Mensaje.find()
	// const mensajes = 7
	// const mensajes = "nombre:Bienvenido"
	// console.log("Gettt")
	// res.json(mensajes)
	res.json
	([
		{"id":"1","fecha":"10/05/21","nombre":"Tarjeta de desarrollo.","tipo":"Prestamo solicitado","estado":"visible"},
		{"id":"2","fecha":"05/05/21","nombre":"Inicio de sesión no autorizado.","tipo":"Alerta.","estado":"visible"}
	])
}
//mensajesCtrl.getProductoNombre = (req, res) => {

//}

//En mi request req, gracias a multer, tenemos un campo llamado image
mensajesCtrl.createMensaje = async (req, res) => {
	const newMensaje = new Mensaje(req.body)
	//Si el req viene con archivo...
	// if(req.file)
	// {
	//     const {fileName} = req.file.filename
	//     newMensaje.setImgUrl(req.file.filename)
	// }
	// await newMensaje.save()
	res.send("Create Mensaje")
}

mensajesCtrl.deleteMensaje = async (req, res) => {
	console.log(req.params)
	await Mensaje.findByIdAndDelete(req.params.id)
	res.send("Delete Mensaje")
}
mensajesCtrl.updateMensaje = async (req, res) => {
	console.log(req.params)
	await Mensaje.findByIdAndUpdate(req.params.id)
	res.send("Update Mensaje")
}

module.exports = mensajesCtrl