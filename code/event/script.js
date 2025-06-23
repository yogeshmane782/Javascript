// Get a reference to the button element
var button=document.getElementById("myButton");

//1.Click Event Listener
button.addEventListener("click",function(){
    alert("Click Event:Button Clicked!");
});

//2.Mouseover Event Listener
button.addEventListener("mouseover",function(){
    button.style.backgroundColor="lightblue";
    console.log("Mouseover Event: Mouse is over the button.");
});

//3.Mouseout Event Listener
button.addEventListener("mouseout",function(){
    button.style,backgroundColor="";
    console.log("Mouseout Event:Mouse left the button.");
});

//4.keydown Event Listener
document.addEventListener("keydown",function(event){
    console.log("Keydown Event:key pressed - "+event.key);
});

//5.Keyup Event Listener
document.addEventListener("keyup",function(event){
    console.log("Keyup Event:key released-"+event.key);
});

//6.Submit Event Listener (form submission)
var form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();//prevent the form submitting
    console.log("Submit Event: Form submitted.");
});