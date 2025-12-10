const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name:String,
    description:String,
    items:Array(any),
    date:Date,
    
});

const Order=mongoose.model("order", orderSchema);
module.exports = Order;