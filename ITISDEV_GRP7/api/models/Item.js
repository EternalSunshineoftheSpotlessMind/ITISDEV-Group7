const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    itemName:{
        type:String,
        required: true,
    },
    itemCategory:{
        type:String,
    },
    itemSupply:{
        type:Number,
        default: 0,
    },
    itemStatus:{
        type:Boolean,
        default: false,
    },
    itemPicture:{
        type:String,
        default: "",
    },
    
})

module.exports = mongoose.model("Items", itemSchema)