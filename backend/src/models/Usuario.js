const {Schema, model} = require("mongoose")


const usuarioSchema = new Schema(
    {
        usuarioUniandes: {type: String, required: true, trim:true, unique:true},
        nombre: {type: String, required: true},
        contrasenia: {type: String, required: true, trim: true}, 
        admin: {type: Boolean, required: true}, 
        lider: {type: Boolean, required: true}
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("Usuario", usuarioSchema);