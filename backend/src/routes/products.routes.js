//Requiero express para crear el enrutador, ya no para crear el servidor
//El enrutador es un objeto que nos permite guardar urls
const {Router} = require("express")

const upload = require("../../libs/storage");

const productsCtrl = require("../controllers/productos.controller")

//Necesito mínimo 4 rutas para cada clase, CRUD

//Para poder usar el enrutador necesito ejecutarlo, entonces hago:
const router = Router()

//Rutas que se usan con api/products
//Me llega una petición a esta ruta y le digo al controlador para saber qué hacer

// api/products
router.get("/", productsCtrl.getProductos)
//Con upload.single("image") estamos diciendo que antes de crear el producto en la base de datos, guarde la imagen que viene con el nombre image en el servidor
router.post("/", upload.single("image"), productsCtrl.createProducto)

// api/products/:id
router.put("/:id", productsCtrl.updateProducto)
router.delete("/:id", productsCtrl.deleteProducto)


//Este objeto es el que voy a usar, entonces lo exporto
module.exports = router