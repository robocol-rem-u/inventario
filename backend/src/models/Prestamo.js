const {Schema, model} = require("mongoose")

const prestamoSchema = new Schema(
    {
        cantidad: {type: Number, required: true, trim:true},
        responsable: {type: String, required: true, trim: true}, 
        fecha: {type: Date, required: true}, 
        id_producto:{type:String, required: true, trim: true}
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("Prestamo", prestamoSchema);