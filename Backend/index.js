const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3001;

app.get("/", (req, res)=>{
    res.send("Sending data")
});

async function connectDb(){
    await mongoose.connect("mongodb://localhost:2100",{
        dbName: "e-comm-store-db"
    })
}
connectDb.catch((err)=>{
    console.log(err)
})
app.listen(port, ()=>{
    console.log("sserver running on port " ,port );
})