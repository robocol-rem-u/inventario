//REQUIRES
const express = require("express")
const path = require('path')

//Morgan es un middleware para escuchar las peticiones que llegan por consola
//Un middleware es una función para procesar algo antes de que termine
const morgan = require("morgan")


//DECLARACIONES
const app = express()
const cors = require("cors")

//ATRIBUTOS
//Le damos el valor del puerto como una variable
//Si puede usar el puerto de la variable de entorno lo usa, si no, usa el 4000
app.set("port", process.env.APP_PORT || 4000)


//MIDDLEWARES
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//Con esta línea le estamos diciendo a express que en la ubicación /public sirva los archivos estáticos que están en /storage/images
//Pero fuera de la api nunca se va a saber que /storage/images es la verdadera ubicación
app.use("/public", express.static(`${__dirname}${path.sep}..${path.sep}storage${path.sep}images`));


//RUTAS
app.use("/api/productos", require("./routes/products.routes"))
app.use("/api/pedidos", require("./routes/pedido.routes"))

module.exports = app