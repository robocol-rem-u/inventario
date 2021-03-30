const {Schema, model} = require("mongoose")

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
        foto: {type: String, required: true}
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("Producto", productSchema);