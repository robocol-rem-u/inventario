const productsCtrl = {}

const Product = require("../models/Product")

productsCtrl.getProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}
productsCtrl.createProduct = async (req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.send("Create Product")
}
productsCtrl.getProduct = (req, res) => {}
productsCtrl.deleteProduct = (req, res) => {}
productsCtrl.updateProduct = (req, res) => {}

module.exports = productsCtrl