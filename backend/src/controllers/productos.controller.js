const storageS3 = require("../../libs/storageS3")
const { v4: uuidv4 } = require('uuid');

const productosCtrl = {}

const Producto = require("../models/Producto")

productosCtrl.getProductos = async (req, res) => {
    const productos = await Producto.find()
    console.log(productos);
    res.json(productos)
}

productosCtrl.createProducto = async (req, res) => {
    const newProducto = new Producto(req.body)
    //Si el req viene con archivo...
    if(req.file){
        let myFile = req.file.originalname.split(".")
        const fileType = myFile[myFile.length - 1]

        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${process.env.AWS_BUCKET_IMAGES_FOLDER}/${uuidv4()}.${fileType}`,
            Body: req.file.buffer,
            ACL: 'public-read'
        }

        storageS3.s3.upload(params, async (error, data) => {
            if(error){
                res.status(500).send(error)
            }
            else{
                console.log(data)
                newProducto.setImgUrl(data.Location);
                await newProducto.save()
                console.log(newProducto)
                res.send("Create Producto")
            }
        })
    }
    else{
        await newProducto.save()
        console.log(newProducto)
        res.send("Create Producto")
    }
}

productosCtrl.deleteProducto = async (req, res) => {
    console.log(req.params)
    await Producto.findByIdAndDelete(req.params.id)
    res.
    send("Delete Producto")
}


productosCtrl.deleteProductos = async (req, res) => {
    await Producto.deleteMany({})
    res.send("Delete all products")
}


productosCtrl.updateProducto = async (req, res) => {
    console.log(req.params)
    await Producto.findByIdAndUpdate(req.params.id)
    res.send("Update Producto")
}

module.exports = productosCtrl