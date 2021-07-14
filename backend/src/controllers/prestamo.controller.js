const Prestamo = require("../models/Prestamo")
/**
 * Devuelve todos los elementos que estan en uso de todos los productos 
 * @param {*} req 
 * @param {*} res 
 */
prestamoCtrl.getElementosEnUso = async (req, res) => {
    const elementosEnUso = await EnUso.find()
    res.json(elementosEnUso)
}
/**
 * Devuelve todos los elementos que estan en uso de un producto en específico
 * @param {*} req 
 * @param {*} res 
 */
 prestamoCtrl.getElementosEnUsoSegunProducto = async (req, res) => {
    const elementosEnUso = await EnUso.find( {"id_producto" : req.body.id_producto})
    res.json(elementosEnUso)
}
prestamoCtrl.createEnUso = async (req, res) => {
    const newEnUso = new EnUso(req.body)
    console.log(newEnUso)
    await newEnUso.save()
    res.send("Create EnUso")
}
prestamoCtrl.getEnUso = async (req, res) => {
    console.log(req.params)
    const prestamo = await EnUso.findById(req.params.id)
    res.json(prestamo)
}
prestamoCtrl.deleteEnUso = async (req, res) => {
    console.log(req.params)
    await EnUso.findByIdAndDelete(req.params.id)
    res.send("Delete EnUso")
}
prestamoCtrl.updateEnUso = async (req, res) => {
    console.log(req.params)
    await EnUso.findByIdAndUpdate(req.params.id, req.body)
    res.send("Update EnUso")
}

module.exports = prestamoCtrl