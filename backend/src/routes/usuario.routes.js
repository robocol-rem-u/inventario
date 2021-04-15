//Requiero express para crear el enrutador, ya no para crear el servidor
//El enrutador es un objeto que nos permite guardar urls
const {Router} = require("express")

const usuarioCtrl = require("../controllers/usuario.controller")

//Necesito mínimo 4 rutas para cada clase, CRUD

//Para poder usar el enrutador necesito ejecutarlo, entonces hago:
const router = Router()

//Rutas que se usan con api/usuario
//Me llega una petición a esta ruta y le digo al controlador para saber qué hacer

// api/usuario
router.get("/", usuarioCtrl.getUsuarios)
router.post("/", usuarioCtrl.createUsuario)

router.post("/login", usuarioCtrl.loginUser)
// api/usuario/:id
router.put("/:id", usuarioCtrl.updateUsuario)
router.delete("/:id", usuarioCtrl.deleteUsuario)


//Este objeto es el que voy a usar, entonces lo exporto
module.exports = router