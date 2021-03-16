const {Schema, model} = require("mongoose")

const productSchema = new Schema(
    {
        nombre: {type: String, required: true},
        cantidad: {type: Number, required: true}
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("Product", productSchema);