//Requiero express para crear el enrutador, ya no para crear el servidor
//El enrutador es un objeto que nos permite guardar urls
const {Router} = require("express")

const pedidoCtrl = require("../controllers/pedido.controller")

//Necesito mínimo 4 rutas para cada clase, CRUD

//Para poder usar el enrutador necesito ejecutarlo, entonces hago:
const router = Router()

//Rutas que se usan con api/products
//Me llega una petición a esta ruta y le digo al controlador para saber qué hacer

// api/products
router.get("/", pedidoCtrl.getPedidos)
router.post("/", pedidoCtrl.createPedido)

// api/products/:id
router.put("/:id", pedidoCtrl.updatePedido)
router.delete("/:id", pedidoCtrl.deletePedido)


//Este objeto es el que voy a usar, entonces lo exporto
module.exports = router