const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const authSupplier = require("./routes/supplier")
const authInventory = require("./routes/inventory")
const authMenu = require("./routes/menu")
const authOrder = require("./routes/order")

dotenv.config();

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-origin", "*")
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")    
    next();
})
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName:"otser",
}).then(console.log("Connected to DB")).catch(e=>console.log(e))

app.use("/api/login", authRoute);
app.use("/api/supplier", authSupplier);
app.use("/api/inventory", authInventory);
app.use("/api/menu", authMenu);
app.use("/api/order", authOrder);

app.listen("5000", () => {
    console.log("Listening.");
})