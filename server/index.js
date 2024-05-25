const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors")
const EmpolyeModel=require("./model/products")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Products")

.then(res=>console.log("db is connected"))

.catch(error=>console.log(error))

app.get("/",(req,res)=>{
    EmpolyeModel.find()
    .then((prod=>res.json(prod)))
    .catch(err=>console.log(err))
    
})
app.post("/products",(req,res)=>{
    EmpolyeModel.create(req.body)
    .then(empolye=>res.json(empolye))
    .catch(e=>console.log(e))

})

// const PORT = process.env.PORT || 8000;
const PORT = 8000;
app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port http://127.0.0.1:${PORT}`)
})