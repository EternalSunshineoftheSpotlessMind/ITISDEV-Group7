const router = require("express").Router();
const Suppliers = require("../models/Supplier")  

router.post("/", async (req, res) => {
    const newSupplier = new Suppliers(req.body);
    try {
      const savedSupplier = await newSupplier.save();
      res.status(200).json(savedSupplier);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/",async(req,res)=>{
    const username = req.query.user;
    try{
        const suppliers = await Suppliers.find();
        res.status(200).json(suppliers);
    } catch(err){
        res.status(500).json(err);
    }
});

router.put("/", async (req, res) => {
    try {
        const updatedSupplier = await Suppliers.findByIdAndUpdate(
        req.body.id,
        {
            $set: req.body,
        },
        { new: true }
        );
        res.status(200).json(updatedSupplier);
    } catch (err) {
        res.status(400).json(err);
    }
  });

module.exports = router