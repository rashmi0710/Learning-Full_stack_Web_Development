// java script variables :
/* Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ 
Names are case sensitive .
Reserved words (like JavaScript keywords) cannot be used as names.*/
const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';

// js output :
/* Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().*/

// challenge :
// create a variable and store the value using promte 
var name = prompt("please enter your name ?");

// java script dom :
// document object model :
/**
 * The HTML DOM can be accessed with JavaScript (and with other programming languages).

In the DOM, all HTML elements are defined as objects.

The programming interface is the properties and methods of each object.

A property is a value that you can get or set (like changing the content of an HTML element).

A method is an action you can do (like add or deleting an HTML element).
 */


document.getElementById("demo").innerHTML = "Hello World!";
//there are the dom method
//.getElementById ()is the easiest way to accesss the the html element to chnage the content or update
//this is the dom method 
// .inner html method is use to get the content of the html element. 
document.querySelector(".list a").style.color="red";

document.querySelector("h1").classList.add("change");
// in this way we can change the h1 style afterwards . for getting some kind of behaivour

