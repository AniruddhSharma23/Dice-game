const randomVariable1 = Math.floor(Math.random() * 6) + 1;
var diceSrc1 = "./images/dice" + randomVariable1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", diceSrc1);
const randomVariable2 = Math.floor(Math.random() * 6) + 1;
var diceSrc2 = "./images/dice" + randomVariable2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", diceSrc2);

if (randomVariable1 > randomVariable2) {
  document.querySelector("h1").innerHTML = "Player1 Wins!";
} else if (randomVariable1 < randomVariable2) {
  document.querySelector("h1").innerHTML = "Player2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
