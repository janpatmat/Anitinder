var images = ["images/lion.jpg", "images/lamb.jpg", "images/bird.jpg","images/giraffe.jpg","images/panda.jpg","images/pikachu.jpg","images/rabbit.jpg","images/snake.png","images/tiger.jpg"]
var names = ["Lion", "Lamb", "Bird","Giraffe","Panda","Pikachu","Rabbit","Snake","Tiger"]
var age = ["4 years old", "2 years old", "6 years old", "4 years old", "3 years old", "2 years old", "5 years old", "6 years old", "2 years old", ]
var gender = ["Male" , "Female" , "Male" , "Female" , "Male" , "Female" , "Male" , "Female" , "Male"]
let counter = -1;
let pcounter = -1

function change(){
    counter = counter + 1;
    document.getElementById("profpics").src = images[counter];
    document.getElementById("name").innerHTML = names[counter];
    document.getElementById("age").innerHTML = age[counter];
    document.getElementById("gender").innerHTML = gender[counter];
    
    console.log("row"+counter);
    if(counter >= 9){
        document.getElementById("profpics").src = "images/tiger.jpg";
        document.getElementById("name").innerHTML = "Tiger";
        document.getElementById("age").innerHTML = "2 years old";
        document.getElementById("gender").innerHTML = "Male";
          alert("That is all thank you!!");
       }
   

}

function insert(){
    change();
   if(pcounter == -1 && counter == 0){
    document.getElementById("row"+counter).width = 50;
    document.getElementById("row"+counter).src = "images/fox.jpg";
    document.getElementById("arow"+counter).innerHTML = "Fox";
    pcounter = pcounter + 1;
   }
   else if (counter > 9){
    document.getElementById("row"+counter).src = "images/tiger.jpg";
    
   
   }
   else if (counter <= 9){
    document.getElementById("row"+counter).width = 50;
    document.getElementById("row"+counter).src = images[counter-1];
    document.getElementById("arow"+counter).innerHTML = names[counter-1];
   }
   
}