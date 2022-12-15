const router = require("express").Router();
const Suppliers = require("../models/Supplier")  

router.get("/",async(req,res)=>{
    const username = req.query.user;
    try{
        const suppliers = await Suppliers.find();
        res.status(200).json(suppliers);
    } catch(err){
        res.status(500).json(err);
    }
});

module.exports = router