require("./database")
const app = require("./app")


//Usamos nodemon para no tener que reiniciar el servidor cada vez que cambiamos el código
//En el package.json, dependencies son las dependencias usadas en producción, devDependencies son las que se usan en el desarrollo
//En el package.json, en Scripts, ponemos nodemon para poderlo usar
//Para usar nodemon, ponemos en consola npm rund dev, porque dev es el nombre del script en el package.json

//Se usó también la extensión Rest Client de VSC para probar el api

app.listen(app.get("port"))
console.log("Server on port ", app.get("port"))