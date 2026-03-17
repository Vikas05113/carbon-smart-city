const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/carbonDB")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("MongoDB connection error:", err));

const Carbon = mongoose.model("Carbon",{
vehicle:Number,
electricity:Number,
carbon:Number
});

app.post("/calculate", async (req,res)=>{

const vehicle = req.body.vehicle;
const electricity = req.body.electricity;

const carbon = (vehicle * 0.192) + (electricity * 0.85);

const data = new Carbon({
vehicle,
electricity,
carbon
});

await data.save();

res.json({carbon});

});

app.listen(3000,()=>{
console.log("Server running on port 3000");
});