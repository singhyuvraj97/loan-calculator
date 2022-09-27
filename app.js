// let cardInputList = document.querySelectorAll(".cardInputCont").forEach(function (val){
//   console.log(val);
// });

//variables
let userInputValues = [];

//dom variables
let userInput = document.querySelectorAll(".cardUserInput");
let inputRes = document.querySelectorAll(".inputRes");
let calcBtn = document.querySelector(".cardBtn");

//event listener
calcBtn.addEventListener("click",calcAns);


//event Handler
function calcAns(e){
  console.log(e.target);
  return false;
}