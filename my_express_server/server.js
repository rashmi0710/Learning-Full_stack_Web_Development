//jshint esversion:6

const express = require("express");
const app = express();

// app.get("/", function(request,response){
//     response.send("<h1>hello_world</h1>");
// });
app.listen(3000 ,function(){
    console.log("server has started o port 3000");
});// but this will not work because we are not using response and request method 

app.get("/",function(request,response){
    response.send("<h1>Rashmi local page!!</h1>");
});

app.get("/about",function(request,response){
    response.send("<h1>Rashmi abouts  page!!</h1>");
});
