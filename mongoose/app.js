const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruits');
// creating scehma:
const fruitschema = new mongoose.Schema({
    name : String,
    rating : {
        type :Number,
        min :1,
        max :10
    },
    review : String
});
//creating model:
const Fruit = new mongoose.model("Fruit",fruitschema);

//now we will create the fruit document:
const fruit = new Fruit({
    name : "apple",
    rating : 5,
    review : "i like apple but it is not in taste"
});
const mango = new Fruit({
    name : "mango",
    rating : 5,
    review : "my fav fruit is mango"
});
const kiwi = new Fruit({
    name : "kiwi",
    rating : 6,
    review : "kiwi has sour taste that i don't like after all"
});
const nimbu = new Fruit({
    name: "nimbu",
    rating : 4,
    review : "tum agar mil jao jamam"
});

// Fruit.insertMany([mango,kiwi,nimbu]);
const nashpati = new Fruit({
    rating : 4,
    review : "do you ever eated nashpati"
});
// nashpati.save();

Fruit.updateOne({_id: "649b0a74180a1c62f05d94e4"},{name:"nashpati"});
// fruit.save();

//now we are creating the new schema of person 
// creating scehma:
const personchema = new mongoose.Schema({
    name : String,
    age : {
        type :Number,
        min :1,
        max :100
    }
});

const Person = new mongoose.model("Peron",personchema);

const person = new Person({
    name : "Arun",
    age : 45
});
person.save();
