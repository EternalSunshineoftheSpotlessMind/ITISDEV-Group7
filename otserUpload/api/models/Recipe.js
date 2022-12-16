const mongoose = require("mongoose")

const recipeSchema = new mongoose.Schema({
    dishName:{
        type:String,
        default: "",
    },
    ingredientID:{
        type:Array,
        default: "",
    },
    
},{timestamps:true})

module.exports = mongoose.model("Recipe", recipeSchema)