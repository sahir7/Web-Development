const express=require("express");

const bodyParser=require("body-parser");


const app=express();

app.use(bodyParser.urlencoded({extensions:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
   var w=Number(req.body.weight);
   var h=Number (req.body.height);

  var result=(w/(h*h))*10000;
  res.send("Calculated bmi is "+ result);
});

app.listen(3000,function(){
  console.log("star calculating bmi on port 3000");
});
