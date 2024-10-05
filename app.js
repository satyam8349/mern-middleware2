import express from "express";
const app=express();

app.use("/",(req,res,next)=>{
    console.log("this middle were");
    next();
})

app.get("/",(req,res,next)=>{
    console.log("home console");
    res.send("home page");
    next();
})

app.get("/about",(req,res,next)=>{
    console.log("about console");
    res.send("about page");
    next();
})

app.use("/",(req,res,next)=>{
    console.log("this middle were 1");
    next();
})

app.use("/",(req,res)=>{
    console.log("this middle were 2");
    
})


app.listen(4455,()=>{
    console.log("surver is running in port 5590");
})