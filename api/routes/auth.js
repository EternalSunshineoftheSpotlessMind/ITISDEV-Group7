const router = require("express").Router();
const User = require("../models/User")

router.post("/", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      !user && res.status(400).json("Wrong credentials!");
  
      !(req.body.password === user.password) && res.status(400).json("Wrong credentials!");
  
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router