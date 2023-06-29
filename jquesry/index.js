$("h1").addClass("big-title");
$("button").html("don't click this")
//manipulatinh the attribute the html tag 
$("a").attr("href", "https://www.w3schools.com/");
//adding event listerner in jqury 
// $("h1").click(function(){
//     $("h1").css("color","purple");
// });
// when we want to add event listener to html tag button :
//javascript
// for(i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color="purple";
//     });
// }
//jquery 
$(document).keypress(function(event){
    $("h1").text(event.key);
});