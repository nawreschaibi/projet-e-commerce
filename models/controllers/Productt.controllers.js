export const postProductt = async 

const Productt = require("../Productt");
router.post("/add",async(req,res)=>{
    try {
        const newProductT=new Productt(req.body);
        let result=await newProductt.save()
        res.send({response : result,msg: "added"})
    } catch (error) {
        console.log(error)
    }
})
