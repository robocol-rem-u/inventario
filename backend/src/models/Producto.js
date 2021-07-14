const {Schema, model} = require("mongoose")
const { appConfig } = require("../../config")
const app = require("../app")

const productoSchema = new Schema(
    {
        nombre: {type: String, required: true},
        descripcion: {type: String, required: true},
        proveedor: {type: String, required: true},
        //Podemos poner las familias en un enum
        familia: {type: String, required: true},
        //Podemos poner las ubicaciones posibles en un enum
        ubicacionEnCubiculo: {type: String, required: true},
        cantidadTotal: {type: Number, required: true},
        cantidadDisponiblesParaUso: {type: Number, required: true},
        cantidadDisponiblesParaArreglo: {type: Number, required: true},
        cantidadEnUso: {type: Number, required: true},
        cantidadEnArreglo: {type: Number, required: true},
        fotoPath: {type: String},
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//Mongoose nos permite crear métodos a nuestros esquemas:
productoSchema.methods.setImgUrl = function setImgUrl (imagePath){
    this.fotoPath = imagePath;
}

module.exports = model("Producto", productoSchema);