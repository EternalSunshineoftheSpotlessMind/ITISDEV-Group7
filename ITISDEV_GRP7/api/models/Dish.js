const mongoose = require("mongoose")

const dishSchema = new mongoose.Schema({
    dishName:{
        type:String,
        default: "",
    },
    
},{timestamps:true})

module.exports = mongoose.model("Dish", dishSchema)