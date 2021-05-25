const {Schema, model} = require("mongoose")
const { appConfig } = require("../../config")
const app = require("../app")

const mensajeSchema = new Schema(
    {
        nombre: {type: String, required: true},
        descripcion: {type: String, required: true},
        // proveedor: {type: String, required: true},
        // //Podemos poner las familias en un enum
        // familia: {type: String, required: true},
        // //Podemos poner las ubicaciones posibles en un enum
        // ubicacionEnCubiculo: {type: String, required: true},
        // cantidadTotal: {type: Number, required: true},
        // cantidadDisponiblesParaUso: {type: Number, required: true},
        // cantidadDisponiblesParaArreglo: {type: Number, required: true},
        // cantidadEnUso: {type: Number, required: true},
        // cantidadEnArreglo: {type: Number, required: true},
        // fotoPath: {type: String},
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
// //Mongoose nos permite crear métodos a nuestros esquemas:
// mensajeSchema.methods.setImgUrl = function setImgUrl (fileName)
// {
//     //Debería ser así, pero por alguna razón no funciona
//     /*
//     const { host, port } = appConfig
//     this.fotoPath = `${host}:${port}/public/${fileName}`
//     */
//     this.fotoPath = `http://localhost:4000/public/${fileName}`
// }
module.exports = model("Mensaje", mensajeSchema);

// const {Schema, model} = require("mongoose")

// const compraSchema = new Schema(
//     {
//         nombre: {type: String, required: true},
//         id: {type: String, required: true},
//         descripcion: {type: String, required: true},
//         proveedor: {type: String, required: true},
//         responsable: {type: String, required: true},
//         ubicacion: {type: String, required: true},
//         estado: {type: String, required: true},
//         susbsistemaQueLoNecesita: {type: String, required: true},
//         comentariosExtra: {type: String, required: true},
//         disponibleParaUso: {type: Number, required: true},
//         disponibleParaArreglo: {type: Number, required: true},
//         foto: {type: String, required: true}
//     },
//     {
//         timestamps: true,
//         versionKey: false,
//     }
// );

// module.exports = model("Mensaje", compraSchema);