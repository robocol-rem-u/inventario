const {Schema, model} = require("mongoose")

const pedidoSchema = new Schema(
    {
        estado: {type: String, required: true},
        fechaCompra: {type: Date, required: true},
        contribuyente: {type: String, required: true},
        
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("Pedido", pedidoSchema);