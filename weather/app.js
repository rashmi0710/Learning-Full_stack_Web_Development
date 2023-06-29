//jshint esversion:6

const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");    
});
app.post("/",function(req,res){
    
    const ap_id = "3118a45f3526a84378c28a654d0f6ed3";
    const query = req.body.city_name;
    const unit = "metrics"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +" &appid="+ap_id +"&units="+ unit +"#";
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            console.log(weatherData)
            //printitng the temperature:
            const temp = weatherData.main.temp;
            console.log(temp);
            const des = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
            console.log(des);
            res.write("<h1>The temperatue in "+query +" is :" + temp + " degree celcius </h1>");
            res.write("<p>The Description of the weather in" + query+"is:"+ des + " thankyou <p>");
            res.write("<img src=" + imageURL + ">");
            res.send()
        });
    })
});
    







app.listen("3000", function(){
    console.log("server is running on port 3000");
});