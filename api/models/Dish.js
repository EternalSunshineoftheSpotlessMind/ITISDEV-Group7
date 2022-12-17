const mongoose = require("mongoose")

const dishSchema = new mongoose.Schema({
    dishName:{
        type:String,
        default: "",
    },
    dishCategory:{
        type:String,
        default: "",
    },
    dishPrice:{
        type:Number,
        default: 0,
    },
    dishStatus:{
        type:Boolean,
        default: false,
    },
    
},{timestamps:true})

module.exports = mongoose.model("Dish", dishSchema)