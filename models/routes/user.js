const express = require ("express");
const res = require("express/lib/response");
const router = express.Router();

const bcrypt = require ("bcrypt");
const User = require("../user");
const jwt = require("jsonwebtoken");
const {loginRules,registerRules,validation} = require("../../middelware/validator");
const isAuth=require("../../middelware/passport");
router.get("/",(req , res)=>{
    res.send("hello world")
}
)


//register
router.post("/register", registerRules(),validation,async(req,res)=>{
    const{name,lastName,email,password}=req.body;
    try {
        const newUser=new User ({name,lastName,email,password})

        //check if th email exist
        const searchedUser=await User.findOne({email})
        if (searchedUser){
            return res.status(400).send ({msg:"email already exist"});
        }






//hash password
    const salt =10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword= await bcrypt.hash(password,genSalt);
    console.log(hashedPassword);
    newUser.password=hashedPassword;

    //generate a token
    

        //save th user
        const newUsertoken=await  newUser.save();
        const payload={
            _id:newUser.id,
            name:newUsertoken.name,
        }
    
        const token = await jwt.sign(payload,process.env.Secretorkey,{
            expiresIn:3600,
        });
        
        res.status(200).send({newUsertoken , msg:"user is saved " , token :` bearer ${token}`});
    } catch (error) {
        res.status(500).send("can not save the user")
        console.log(error)
        
    }
})



//login

router.post("/login", loginRules(),validation ,async (req,res)=>{
    const {email,password}=req.body
    try {
        //find if the user exist
        const searchedUser = await user.findOne({email});
        // if the email not exist 
        if (!searchedUser){
            return res.status(400).send({ masg : "bad credenial"})
        }
        //password are equals
        const match= await bcrypt.compare(password,searchedUser.password);
        
        if (!match){
            return res.status(400).send({ masg : "bad credenial"});
        }

        //creer un token
        const payload={
            _id:searchedUser.id,
            name:searchedUser.name,
        };
        const token = await jwt.sign(payload,process.env.Secretorkey,{
            expiresIn:3600,
        });
        console.log(token);

          //send the user
          res.status(200).send({user:searchedUser,msg :"success",token :` bearer ${token}`});
    } catch (error) {
        res.status(500).send({ msg :"can not get the user"});
        
    }

})




router.get("/current" ,isAuth(),(req,res)=>{
    res.status(200).send({user:req.user});
}
)
module.exports= router;