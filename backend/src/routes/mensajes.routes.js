//Requiero express para crear el enrutador, ya no para crear el servidor
//El enrutador es un objeto que nos permite guardar urls
const {Router} = require("express")

// const upload = require("../../libs/storage");

const mensajesCtrl = require("../controllers/mensajes.controller")

//Necesito mínimo 4 rutas para cada clase, CRUD

//Para poder usar el enrutador necesito ejecutarlo, entonces hago:
const router = Router()

//Rutas que se usan con api/mensajes
//Me llega una petición a esta ruta y le digo al controlador para saber qué hacer

// api/mensajes
router.get("/", mensajesCtrl.getMensajes)
//Con upload.single("image") estamos diciendo que antes de crear el producto en la base de datos, guarde la imagen que viene con el nombre image en el servidor
// router.post("/", upload.single("image"), mensajesCtrl.createMensaje)

// api/mensajes/:id
router.put("/:id", mensajesCtrl.updateMensaje)
router.delete("/:id", mensajesCtrl.deleteMensaje)

//Este objeto es el que voy a usar, entonces lo exporto
module.exports = router