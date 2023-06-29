//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


// now we have the rpblem that last element of our list is replace angaing the value of items are changing
// therefore we have to store the collection of item.
var items = ["buy food", "list out the food" , "make the cofee"];
var Worklist = [];
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

//now we will be learning how to use templateing with EJS 


app.get("/",function(request,response){
    // response.send("hello this page is working fine");

    // var today = new Date();
    // var current = today.getDay();
    // var day = "";

    // switch (current) {
    //     case 0:
    //         day = "sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "thursday";
    //         break;
    //     case 4:
    //         day = "friday";
    //         break;
    //     case 5:
    //         day = "saturday";
    //         break;
    //     case 6:
    //         day = "sunday";
    //         break;
    //     default:
    //         day = "invalid day";
    // }
    // this is important note here that how can we pass thw variable
    let day = date();
    response.render("list", {ListTile: day, NewListItems: items})
    
});
app.get('/work', function(request,response){
    response.render("list", {ListTile:"WorkList", NewListItems:Worklist});
});
app.post("/", function(req,res){
    var item = req.body.newItem;
    if(req.body.list === "WorkList"){
        Worklist.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
    
   //we cannot render the respose of list in this manner inted we havw to add the another key at one place 
   //    response.render("list",{NewListItem: items })
   // due to this we have the proble of scope therefore we have to create the var items as gobally.
   //    response.render("list", {kinday: day, NewListItem: items});
});




app.listen(3000,function(){
    console.log("server is running in port 3000");
});