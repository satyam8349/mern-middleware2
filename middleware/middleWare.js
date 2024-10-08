const MyCollege =(req,res,next)=>{
    req.myclg="cybrom object";
    console.log("my app level middle ware");
}
module.exports=MyCollege