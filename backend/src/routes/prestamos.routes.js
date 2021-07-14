//Requiero express para crear el enrutador, ya no para crear el servidor
//El enrutador es un objeto que nos permite guardar urls
const {Router} = require("express")

const prestamoCtrl = require("../controllers/prestamo.controller")

//Necesito mínimo 4 rutas para cada clase, CRUD

//Para poder usar el enrutador necesito ejecutarlo, entonces hago:
const router = Router()

//Rutas que se usan con api/products
//Me llega una petición a esta ruta y le digo al controlador para saber qué hacer

// api/products
router.get("/", prestamoCtrl.getPrestamos)
router.post("/", prestamoCtrl.createPrestamo)

// api/products/:id
router.put("/:id", prestamoCtrl.updatePrestamo)
router.delete("/:id", prestamoCtrl.deletePrestamo)


//Este objeto es el que voy a usar, entonces lo exporto
module.exports = router