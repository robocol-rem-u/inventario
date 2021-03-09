const productsCtrl = {}

productsCtrl.getProducts = (req, res) => {res.send("get products")}
productsCtrl.createProduct = (req, res) => {res.send("create products")}
productsCtrl.getProduct = (req, res) => {}
productsCtrl.deleteProduct = (req, res) => {}
productsCtrl.updateProduct = (req, res) => {}

module.exports = productsCtrl