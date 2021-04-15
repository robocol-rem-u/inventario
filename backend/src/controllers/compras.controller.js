const comprasCtrl = {}

const Compra = require("../models/Compra")

comprasCtrl.getCompras = async (req, res) => {
    const compras = await Compra.find()
    res.json(productos)
}
comprasCtrl.createCompra = async (req, res) => {
    const newProducto = new Compra(req.body)
    await newProducto.save()
    res.send("Create Compra")
}
comprasCtrl.deleteCompra = async (req, res) => {
    console.log(req.params)
    await Compra.findByIdAndDelete(req.params.id)
    res.send("Delete Compra")
}
comprasCtrl.updateCompra = async (req, res) => {
    console.log(req.params)
    await Compra.findByIdAndUpdate(req.params.id)
    res.send("Update Compra")
}

module.exports = comprasCtrl