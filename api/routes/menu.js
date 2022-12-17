const router = require("express").Router();
const Dish = require("../models/Dish")  

router.post("/", async (req, res) => {
    const newDish = new Dish(req.body);
    try {
      const savedDish = await newDish.save();
      res.status(200).json(savedDish);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/",async(req,res)=>{
    try{
        const dishes = await Dish.find();
        res.status(200).json(dishes);
    } catch(err){
        res.status(500).json(dishes);
    }
});

router.put("/", async (req, res) => {
    try {
        const updatedDish = await Dish.findByIdAndUpdate(
        req.body.id,
        {
            $set: req.body,
        },
        { new: true }
        );
        res.status(200).json(updatedDish);
    } catch (err) {
        res.status(400).json(err);
    }
  });
  
module.exports = router