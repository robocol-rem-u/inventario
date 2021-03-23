const pedidoCtrl = {}

const Pedido = require("../models/Pedido")

pedidoCtrl.getPedidos = async (req, res) => {
    const pedidos = await Pedido.find()
    res.json(pedidos)
}
pedidoCtrl.createPedido = async (req, res) => {
    const newPedido = new Pedido(req.body)
    console.log(newPedido)
    await newPedido.save()
    res.send("Create Pedido")
}
pedidoCtrl.getPedido = async (req, res) => {
    console.log(req.params)
    const pedido = await Pedido.findById(req.params.id)
    res.json(pedido)
}
pedidoCtrl.deletePedido = async (req, res) => {
    console.log(req.params)
    await Pedido.findByIdAndDelete(req.params.id)
    res.send("Delete Pedido")
}
pedidoCtrl.updatePedido = async (req, res) => {
    console.log(req.params)
    await Pedido.findByIdAndUpdate(req.params.id, req.body)
    res.send("Update Pedido")
}

module.exports = pedidoCtrl