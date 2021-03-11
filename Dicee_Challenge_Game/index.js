
var n1=Math.random();
n1=n1*6;
n1=Math.floor(n1)+1;

var n2=Math.random();
n2=n2*6;
n2=Math.floor(n2)+1;

var d1="images/"+"dice"+n1+".png";

document.querySelectorAll("img")[0].setAttribute("src", d1);

var d2="images/"+"dice"+n2+".png";;
document.querySelectorAll("img")[1].setAttribute("src",d2);

if(n1===n2){
  document.querySelector("h1").innerHTML="Draw!";
}
else if(n1 > n2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
else{
  document.querySelector("h1").innerHTML="🚩Player 2 Wins";
}
