const express = require("express")

//Morgan es un middleware para escuchar las peticiones que llegan por consola
//Un middleware es una función para procesar algo antes de que termine
const morgan = require("morgan")

const app = express()

//Le damos el valor del puerto como una variable
//Si puede usar el puerto de la variable de entorno lo usa, si no, usa el 4000
app.set("port", process.env.PORT || 4000)

app.use(morgan("dev"))

app.use("/api/products", require("./routes/products.routes"))

module.exports = app