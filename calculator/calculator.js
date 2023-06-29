// jshint esversion:

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(request,response){
    response.sendFile(__dirname + "/index.html");
});
app.post("/",function(request,response){
    var num_1 = Number(request.body.number1);
    var num_2 = Number(request.body.number2);
    var result = num_1 + num_2;
    response.send("thanks for sending the data and your result is:" + result);
});

app.get("/bmicalculator",function(request,response){
    response.sendFile(__dirname + "/bmi_calculator.html");
});
app.post("/bmicalculator",function(request,response){
    var weight = parseFloat(request.body.weight);
    var height = parseFloat(request.body.height);
    var bmi = weight / height * height;
    response.send("your bmi is:" + bmi);
});

app.listen(3000,function(){
    console.log("server is running in port 3000");
});