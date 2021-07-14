const EnUso = require("../models/EnUso")
/**
 * Devuelve todos los elementos que estan en uso de todos los productos 
 * @param {*} req 
 * @param {*} res 
 */
enUsoCtrl.getElementosEnUso = async (req, res) => {
    const elementosEnUso = await EnUso.find()
    res.json(elementosEnUso)
}
/**
 * Devuelve todos los elementos que estan en uso de un producto en específico
 * @param {*} req 
 * @param {*} res 
 */
 enUsoCtrl.getElementosEnUso = async (req, res) => {
    const elementosEnUso = await EnUso.find( {"id_producto" : req.body.id_producto})
    res.json(elementosEnUso)
}
enUsoCtrl.createEnUso = async (req, res) => {
    const newEnUso = new EnUso(req.body)
    console.log(newEnUso)
    await newEnUso.save()
    res.send("Create EnUso")
}
enUsoCtrl.getEnUso = async (req, res) => {
    console.log(req.params)
    const enUso = await EnUso.findById(req.params.id)
    res.json(enUso)
}
enUsoCtrl.deleteEnUso = async (req, res) => {
    console.log(req.params)
    await EnUso.findByIdAndDelete(req.params.id)
    res.send("Delete EnUso")
}
enUsoCtrl.updateEnUso = async (req, res) => {
    console.log(req.params)
    await EnUso.findByIdAndUpdate(req.params.id, req.body)
    res.send("Update EnUso")
}

module.exports = enUsoCtrl