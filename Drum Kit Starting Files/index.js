var numberofbuttons = document.querySelectorAll(".drum").length;
for (var index = 0; index < numberofbuttons; index++) {
    document.querySelectorAll(".drum")[index].addEventListener('click',function(){
        // var audio = new Audio('sounds/tom-1.mp3');
        // audio.play();
        // this.style.color="white";
        var buttonInnerHTML =this.innerHTML;
        makesound(buttonInnerHTML);
        buttonanimation(buttonInnerHTML);
    });
    
}
document.addEventListener("keypress",function(){
    makesound(event.key);
    buttonanimation(event.key);
});
//fuction they will use to make the sound :
function makesound(key){
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;
        default:
            console.log('buttonInnerHTML');
            
    }
}
// adding animation to the butttons: 
function buttonanimation(currentkey){
    var activeButton = document.querySelector("."+ currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed");},100);

}


//fuction will tell when button is clicked
// function Housekepper(yearOfEperience, name, cleaningRepertories) {
// 	this.yearOfEperience = yearOfEperience;
// 	this.name=name;
// 	this.cleaningRepertories = cleaningRepertories;
// 	//adding the method to the constuctor:
// 	this.clean= function() {
// 		alert('cleaing in progress...');
// 	}
// }