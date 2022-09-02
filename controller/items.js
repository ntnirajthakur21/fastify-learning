let { Items } = require("../datas/item")

exports.addItem = (req,res) =>{
    const {
        name
    } = req.body

    let newItems = [...Items, {id: Items.length + 1, name: name}]
    res.code(201).send(newItems)
}

exports.getitems = (req,res)=>{
    res.send(Items)
}

exports.getItem = (req,res) =>{
    const { id } = req.params
    const item = Items.find(data=>data.id == id)
    res.send(item)
}