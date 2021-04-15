const {Schema, model} = require("mongoose")
const { appConfig } = require("../../config")
const app = require("../app")

const productoSchema = new Schema(
    {
        nombre: {type: String, required: true},
        id: {type: String, required: true},
        descripcion: {type: String, required: true},
        proveedor: {type: String, required: true},
        responsable: {type: String, required: true},
        ubicacion: {type: String, required: true},
        estado: {type: String, required: true},
        susbsistemaQueLoNecesita: {type: String, required: true},
        comentariosExtra: {type: String, required: true},
        disponibleParaUso: {type: Number, required: true},
        disponibleParaArreglo: {type: Number, required: true},
        fotoPath: {type: String},
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//Mongoose nos permite crear métodos a nuestros esquemas:
productoSchema.methods.setImgUrl = function setImgUrl (fileName){
    //Debería ser así, pero por alguna razón no funciona
    /*
    const { host, port } = appConfig
    this.fotoPath = `${host}:${port}/public/${fileName}`
    */
    this.fotoPath = `http://localhost:4000/public/${fileName}`
}

module.exports = model("Producto", productoSchema);