const mongoose = require("mongoose")

const supplierSchema = new mongoose.Schema({
    suppName:{
        type:String,
        required: true,
        unique: true,
    },
    suppAddress:{
        type:String,
        required: true,
    },
    suppContact:{
        type:String,
        required: true,
    },
    suppOwner:{
        type:String,
        required: true,
    },
    suppUrl:{
        type:String,
        required: true,
    },
    
})

module.exports = mongoose.model("Suppliers", supplierSchema)