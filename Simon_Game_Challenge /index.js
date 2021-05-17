

var input=[];
var click=[];





document.addEventListener("keydown",function (){

     if(input.length===0){
       count=0;
     $("h1").text("Level " + (count+1) );

      AddSequence();
     }





});




$(".btn").click(function () {
  var buttonId =  $(this).attr('id');


      click.push(buttonId);
    if(click.length===input.length){
      check();
    }



});



function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}



function check(){
  //alert("aya");
  if(arrayEquals(click,input)){
    //AddSequence();
    count++;
     $("h1").text("Level " + count );
     click=[];
     AddSequence();
  }
  else{
    input=[];
    //AddSequence();
    click=[];
    count=0;
    makeSound("wrong");
    $("body").addClass("change");
    setTimeout(function () {
    $("body").removeClass("change");

    }, 200);
    $("h1").text("Game Over! Press Any Key to Restart" );


  }
}





function AddSequence(){
  var n=Math.random();
  n=n*4;
  n=Math.floor(n);
  var key;
  if(n==0){
    key="green";


  }
  else if(n==1){
    key="red";


  }
  else if(n==2){
    key="yellow";

  }
  else{
    key="blue";

  }

  //input.push(key);
  makeSound(key);
  madeAnimation(key)
  input.push(key);


}

function makeSound(key){
  switch (key) {
    case "green":
      var audio = new Audio("sounds/green.mp3");
      audio.play();
      break;
    case "red":
      var audio = new Audio("sounds/red.mp3");
      audio.play();
      break;
    case "yellow":
      var audio = new Audio("sounds/yellow.mp3");
      audio.play();
      break;
    case "blue":
      var audio = new Audio("sounds/blue.mp3");
      audio.play();
    case "wrong":
      var audio = new Audio("sounds/wrong.mp3");
      audio.play();
      break;

    default:console.log(key);

  }
}


function madeAnimation(key){
  var activeButton=document.querySelector("."+key);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");

  }, 200);
}
