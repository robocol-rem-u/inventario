const express = require("express")

//Morgan es un middleware para escuchar las peticiones que llegan por consola
//Un middleware es una función para procesar algo antes de que termine
const morgan = require("morgan")

const app = express()

const cors = require("cors")

//Le damos el valor del puerto como una variable
//Si puede usar el puerto de la variable de entorno lo usa, si no, usa el 4000
app.set("port", process.env.PORT || 4000)

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/products", require("./routes/products.routes"))
app.use("/api/pedidos", require("./routes/pedido.routes"))
app.use("/api/usuarios", require("./routes/usuario.routes"))

module.exports = app