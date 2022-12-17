const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    itemName:{
        type:String,
        required: true,
    },
    itemCategory:{
        type:String,
    },
    itemStatus:{
        type:Boolean,
        default: false,
    },
    itemPicture:{
        type:String,
        default: "",
    },
    itemPoint:{
        type:Number,
        default: 0,
    },
    itemQty:{
        type:Number,
        default: 0,
    },
})

module.exports = mongoose.model("Items", itemSchema)