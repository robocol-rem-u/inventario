const productosCtrl = {}

const Producto = require("../models/Producto")

productosCtrl.getProductos = async (req, res) => {
    const productos = await Producto.find()
    res.json(productos)
}
//productosCtrl.getProductoNombre = (req, res) => {

//}
productosCtrl.createProducto = async (req, res) => {
    const newProducto = new Producto(req.body)
    await newProducto.save()
    res.send("Create Producto")
}

productosCtrl.deleteProducto = async (req, res) => {
    console.log(req.params)
    await Producto.findByIdAndDelete(req.params.id)
    res.send("Delete Producto")
}
productosCtrl.updateProducto = async (req, res) => {
    console.log(req.params)
    await Producto.findByIdAndUpdate(req.params.id)
    res.send("Update Producto")
}

module.exports = productosCtrl