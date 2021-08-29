const historialCtrl = {}

const Historial = require("../models/Historial")

historialCtrl.getHistoriales = async (req, res) => {
    const historiales = await Historial.find()
    res.json(historiales)
}
historialCtrl.createHistorial = async (req, res) => {
    console.log(req);
    const newHistorial = new Historial(req.body)
    console.log(newHistorial)
    await newHistorial.save()
    res.json(newHistorial)
}
historialCtrl.getHistorial = async (req, res) => {
    console.log(req.params)
    const historial = await Historial.findById(req.params.id)
    res.json(historial)
}
historialCtrl.deleteHistorial = async (req, res) => {
    console.log(req.params)
    await Historial.findByIdAndDelete(req.params.id)
    res.send("Delete Historial")
}
historialCtrl.updateHistorial = async (req, res) => {
    console.log(req.params)
    await Historial.findByIdAndUpdate(req.params.id, req.body)
    res.send("Update Historial")
}
/**
 * Devuelve todos los movimientos de un producto en específico
 * @param {*} req 
 * @param {*} res 
 */
 historialCtrl.getHistorialSegunProducto = async (req, res) => {
    const historialProducto = await Historial.find( {"id_producto" : req.params.id})
    res.json(historialProducto)
}

module.exports = historialCtrl