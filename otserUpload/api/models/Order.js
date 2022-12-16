const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    orders: [{
        dishID:
        {
            type:String,
        },
        dishName:
        {
            type:String,
        },
        dishPrice:
        {
            type:String,
        },
        quantity:       
        {
            type:String,
        },
    }],
    cashierName:{
        type:String,
        required:true,
    },
    totalPrice:{
        type:Number,
        required:true,
    },
    
},{timestamps:true})

module.exports = mongoose.model("Order", orderSchema)