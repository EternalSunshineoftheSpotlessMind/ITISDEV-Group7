const router = require("express").Router();
const Item = require("../models/Item")  

router.post("/", async (req, res) => {
    const newItem = new Item(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(200).json(savedItem);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/",async(req,res)=>{
    try{
        const items = await Item.find();
        res.status(200).json(items);
    } catch(err){
        res.status(500).json(items);
    }
});

router.put("/", async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(
        req.body.id,
        {
            $set: req.body,
        },
        { new: true }
        );
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(400).json(err);
    }
  });
  
module.exports = router