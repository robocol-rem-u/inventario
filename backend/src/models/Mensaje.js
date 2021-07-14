const {Schema, model} = require("mongoose")
const { appConfig } = require("../../config")
const app = require("../app")

const mensajeSchema = new Schema(
    {
        nombre: {type: String, required: true},
        descripcion: {type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false,
    }
);


module.exports = model("Mensaje", mensajeSchema);
