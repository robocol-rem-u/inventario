const {Schema, model} = require("mongoose")

const pedidoSchema = new Schema(
    {
        estado: {type: String, required: true},
        fechaCompra: {type: Date, required: true},
        contribuyente: {type: String, required: true},
        //proveedor: {type: Schema.Types.ObjectId, ref: 'Proveedor', required: true}
        
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("Pedido", pedidoSchema);