const storageS3 = require("../../libs/storageS3")
const { v4: uuidv4 } = require('uuid');

const DISPONIBLEUTILIZAR="Disponible para utilizar";
const DISPONIBLEARREGLAR="Disponible para arreglar";
const ENUSO="En uso";
const ENARREGLO="En arreglo";
const productosCtrl = {}

const Producto = require("../models/Producto")

productosCtrl.getProductos = async (req, res) => {
    const productos = await Producto.find()
    console.log(productos);
    res.json(productos)
}

productosCtrl.getProducto = async (req, res) => {
    console.log(req.params)
    const producto =await Producto.findById(req.params.id)
    res.json(producto)
}

productosCtrl.moverProducto= async(req, res)=>{
    const datos = {
        id:req.params.id,
        desde: req.body.desde,
        hasta: req.body.hasta,
        cantidad: req.body.cantidad
    }
    if(datos.desde==datos.hasta){
        res.status(409).send({ message: 'No se puede realizar el cambio.' });
    }
    else if (datos.cantidad<1){
        res.status(409).send({ message: 'La cantidad debe ser mayor a cero' }); 
    }
    else if (datos.desde==DISPONIBLEUTILIZAR && datos.hasta==ENARREGLO){
        res.status(409).send({ message: 'No puede mover desde disponbiles para uso hasta en arreglo, estas unidades deberian estar en disponible para arreglo' }); 
    }
    //como ya todos los errores por input se revisaron, se hace el update
    else{
        const producto =await Producto.findById(datos.id);
        //Esto se hace para que los productos de Desde y hasta concuerden con los atributos del producto
        datos.desde= cambiarDesde(datos.desde);
        datos.hasta=cambiarDesde(datos.hasta);
        datos.cantidad= parseInt(datos.cantidad)

        if(producto[datos.desde]-datos.cantidad>=0 )
        {
            //no hay error, se hace el update 
            console.log("antes", producto);
            producto[datos.desde]=producto[datos.desde]-datos.cantidad;
            producto[datos.hasta]=producto[datos.hasta]+datos.cantidad;
            await Producto.findByIdAndUpdate(req.params.id, producto)
            console.log("despues", producto);
        }
        else{
            res.status(409).send({ message: 'No es posible mover todas esas cantidades' }); 
   
        }


        
    }

}
function cambiarDesde(desde){
    if(desde==DISPONIBLEUTILIZAR){
        return "cantidadDisponiblesParaUso"; 
    }
    else if (desde==DISPONIBLEARREGLAR){
        return "cantidadDisponiblesParaArreglo"
    }
    else if(desde==ENARREGLO){
        return "cantidadEnArreglo"
    }
    else
        return "cantidadEnUso"
}


productosCtrl.createProducto = async (req, res) => {
    const newProducto = new Producto(req.body)
    //Si el req viene con archivo...
    if (!req.files || Object.keys(req.files).length === 0) {
        console.log(req)
        return res.status(400).send('No image was uploaded');
    }
    else{
        let myFile = req.files.image
        const fileType = myFile.name.split(".")[1]

        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${process.env.AWS_BUCKET_IMAGES_FOLDER}/${uuidv4()}.${fileType}`,
            Body: myFile.data,
            ACL: 'public-read'
        }
        
        storageS3.upload(params, async (error, data) => {
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
}

productosCtrl.deleteProducto = async (req, res) => {
    console.log(req.params)
    await Producto.findByIdAndDelete(req.params.id)
    res.send("Delete Producto")
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