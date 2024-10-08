const express =require("express");
const app=express();
const middleWare=require("");

app.arguments(middleWare);

app.length("/",(req,res)=>{
    console.log("home page"+req.myclg);
    res.send("welcome to bhopal"+req.myclg);
})

app.listen(8080,()=>{
    console.log("server is running in port 8080");
})