document.getElementById("orange").onclick = switchToOrange;
document.getElementById("green").onclick = switchToGreen;
document.getElementById("blue").onclick = switchToBlue;
document.getElementById("pink").onclick = switchToPink;
document.getElementById("Black").onclick = switchToBlack;
document.getElementById("white").onclick = switchToWhite;
document.getElementById("red").onclick = switchToRed;
document.getElementById("yellow").onclick = switchToYellow;

function switchToOrange() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "orange";
  document.getElementsByTagName("body")[0].style.color = "white";
}
function switchToGreen() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "green";
  document.getElementsByTagName("body")[0].style.color = "white";
}
function switchToBlue() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
  document.getElementsByTagName("body")[0].style.color = "white";
}
function switchToPink() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "pink";
  document.getElementsByTagName("body")[0].style.color = "black";
}
function switchToBlack() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "Black";
  document.getElementsByTagName("body")[0].style.color = "black";
}
function switchToWhite() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "white";
  document.getElementsByTagName("body")[0].style.color = "white";
}
function switchToRed() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "red";
  document.getElementsByTagName("body")[0].style.color = "red";
}
function switchToYellow() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "yellow";
  document.getElementsByTagName("body")[0].style.color = "yellow";
}
