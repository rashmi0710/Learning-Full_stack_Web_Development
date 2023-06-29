//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const https = require("https");
const request = require("request");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));



app.get("/",function(request,res){
    res.sendFile(__dirname + "/signup.html");
})

app.post("/",function(request,res){
    const frist_name = request.body.frist_name;
    const last_name = request.body.last_name;
    const email = request.body.email;
    var data = {
        members:[
            {
                email_address: email,
                status: "subscribed",
                merge_fileds: {
                    FNAME : frist_name,
                    LNAME : last_name
                }

            }
        ]
    };

    var jsonData = JSON.stringify(data);



    const url = "https://us21.api.mailchimp.com/3.0/lists/715e5b074f";
    const options = {
        method:"POST",
        auth:"rashmi_07:jjd52117ea049daedcf9985fe8c3c0a0c9-us21"
    }
    // // if the sing up is not sussesfully done:
        

    const req = https.request(url, options, function(response){
        
        if(response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        }else {
            res.sendFile(__dirname + "/failure.html");
        }
        //parsing the data:
        response.on("data",function(data){
            console.log(JSON.parse(data));
        });
    });


    req.write(jsonData);
    req.end();
});

app.post("/failure", function(req, res){
    res.redirect("/");
});


app.listen("3000", function(response){
    console.log("the server is running on post 3000");
})
//api key 
// d52117ea049daedcf9985fe8c3c0a0c9-us21

// audience id 
//715e5b074f
