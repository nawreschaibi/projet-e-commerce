const express=require("express");
const res = require("express/lib/response");
const routerProductt= express.Router();
const User=require("../Productt");
const Productt = require("../Productt");
const router = require("./user");


//ADD PRODUCT
routerProductt.post("/add",async(req,res)=>{
    try {
        const newProductt=new Productt(req.body);
        let result=await newProductt.save()
        res.send({response : result,msg: "added"})
    } catch (error) {
        console.log(error)
    }
})

//DELETE PRODUCT
routerProductt.delete("/:id", async (req, res) => {
  try {
    const deleted= await Productt.findByIdAndRemove(req.params.id);
     res.status(200).json({ message: "Operation Succeded" });
     deletedProductt.n
       ?res.status(200).json({ message: "Operation failed" })
    :res.status(200).json({ message: "Operation Succeded" })
} catch (err) {
    res.status(500).json({ message: "No Data to Delete.",err });
    console.log(err);
  }
  });

 //PUT PRODUCT
 routerProductt.put("/:id", async (req, res) => {
    try {
     const result = await Productt.updateOne(
       { _id: req.params.id },
       { $set: { ...req.body } }
      );

      result.nModified
       ? res.send({ message: "Productt updated" })
       : res.send({ message: "Productt already updated" });
   } catch (error) {
     res.status(400).send({ message: "there is no Productt with this id" });
    }
 });

//@METHOD GET 
//@GET ALL PRODUCTTS
//PATH:http://localhost:5000/Productts
 routerProductt.get("/",async(req,res) =>{
  try {
   const result=await Productt.find()
     res.send({result,message:"getting productts succefully"})
  } catch (error) {
    res.status(400).send({message:"can not get productts"})
    
  }
 })



 




module.exports = routerProductt
