const {Schema, model} = require("mongoose")

const historialSchema = new Schema(
    {
        cantidad: {type: Number, required: true, trim:true},
        tipoMovimiento: {type: String, required: true, trim:true},
        responsable: {type: String, required: true, trim: true}, 
        fecha: {type: Date, required: true}
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("Historial", historialSchema);