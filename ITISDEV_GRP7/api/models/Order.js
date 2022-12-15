const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    dishID:{
        type:String,
        required: true,
    },
    cashierName:{
        type:String,
    },
    quantity:{
        type:Int16Array,
        default: 0,
    },
    totalPrice:{
        type:Boolean,
        default: false,
    },
    
},{timestamps:true})

module.exports = mongoose.model("Order", orderSchema)