const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:String,
    description:String,
    shortDescription:String,
    purchangePrice:Number,
    sellingPrice:Number,
    image:Array(String),
    categoryId: [
        {type: mongoose.Schema.Types.ObjectId, ref:"category"}
    ]
});

const Product=mongoose.model("product", productSchema);
module.exports = Product;