
var zaria1 = Math.floor(Math.random() * 6) + 1;

var zaria2 = Math.floor(Math.random() * 6) + 1;

var dice_url1 = "/images/dice"+zaria1+".png";
var dice_url2 = "/images/dice"+zaria2+".png";

document.querySelector(".img1").setAttribute("src", dice_url1); 
document.querySelector(".img2").setAttribute("src", dice_url2); 

if(zaria1>zaria2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(zaria1<zaria2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "DRAW";
}