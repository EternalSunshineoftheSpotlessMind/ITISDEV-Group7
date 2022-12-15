const router = require("express").Router();
const Item = require("../models/Item")  

router.get("/",async(req,res)=>{
    try{
        const items = await Item.find();
        res.status(200).json(items);
    } catch(err){
        res.status(500).json(items);
    }
});

module.exports = router