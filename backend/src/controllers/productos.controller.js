const productosCtrl = {}

const Producto = require("../models/Producto")

productosCtrl.getProductos = async (req, res) => {
    const productos = await Producto.find()
    res.json(productos)
}
//productosCtrl.getProductoNombre = (req, res) => {

//}

//En mi request req, gracias a multer, tenemos un campo llamado image
productosCtrl.createProducto = async (req, res) => {
    const newProducto = new Producto(req.body)
    //Si el req viene con archivo...
    if(req.file){
        const {fileName} = req.file.filename
        newProducto.setImgUrl(req.file.filename)
    }
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