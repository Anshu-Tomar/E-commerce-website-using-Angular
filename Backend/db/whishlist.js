const mongoose = require("mongoose");

const whishlistSchema = new mongoose.Schema({
    userId:String,
    product:String,
    shortDescription:String,
    purchangePrice:Number,
    sellingPrice:Number,
    image:Array(String),
    categoryId: [
        {type: mongoose.Schema.Types.ObjectId, ref:"category"}
    ]
});

const Wishlist=mongoose.model("wishlist", whishlistSchema);
module.exports = Wishlist;