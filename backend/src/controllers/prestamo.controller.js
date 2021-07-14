const prestamoCtrl = {}

const Prestamo = require("../models/Prestamo")
/**
 * Devuelve todos los elementos que estan en uso de todos los productos 
 * @param {*} req 
 * @param {*} res 
 */
prestamoCtrl.getPrestamos = async (req, res) => {
    const elementosPrestamo = await Prestamo.find()
    res.json(elementosPrestamo)
}
/**
 * Devuelve todos los elementos que estan en uso de un producto en específico
 * @param {*} req 
 * @param {*} res 
 */
 prestamoCtrl.getPrestamosProducto = async (req, res) => {
    const elementosPrestamo = await Prestamo.find( {"id_producto" : req.body.id_producto})
    res.json(elementosPrestamo)
}
prestamoCtrl.createPrestamo = async (req, res) => {
    const newPrestamo = new Prestamo(req.body)
    console.log(newPrestamo)
    await newPrestamo.save()
    res.send("Create Prestamo")
}
prestamoCtrl.getPrestamo = async (req, res) => {
    console.log(req.params)
    const prestamo = await Prestamo.findById(req.params.id)
    res.json(prestamo)
}
prestamoCtrl.deletePrestamo = async (req, res) => {
    console.log(req.params)
    await Prestamo.findByIdAndDelete(req.params.id)
    res.send("Delete Prestamo")
}
prestamoCtrl.updatePrestamo = async (req, res) => {
    console.log(req.params)
    await Prestamo.findByIdAndUpdate(req.params.id, req.body)
    res.send("Update Prestamo")
}

module.exports = prestamoCtrl