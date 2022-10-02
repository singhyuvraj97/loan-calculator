// let cardInputList = document.querySelectorAll(".cardInputCont").forEach(function (val){
//   console.log(val);
// });

//variables
let loanAmount = 0;
let interest = 0;
let yrs = 0;
let totalInterest = 0;
let totalPayment = 0;
let monthlyPay = 0;

//dom variables
let userInput = document.querySelectorAll(".cardUserInput");
let inputRes = document.querySelectorAll(".inputRes");
let calcBtn = document.querySelector(".cardBtn");
console.log(inputRes);

//event listener
calcBtn.addEventListener("click",calcAns);

//event Handler
function calcAns(e){
  e.preventDefault();

  loanAmount = Number(userInput[0].value);
  interest = Number(userInput[1].value)/100/12;
  yrs = Number(userInput[2].value)*12;

  const x = Math.pow(1+interest,yrs);

  monthlyPay = (loanAmount * x * interest)/(x-1);
  console.log(monthlyPay.toFixed(2));
  inputRes[0].value = monthlyPay.toFixed(2);
  inputRes[0].classList.remove("inputResHide");
  inputRes[0].classList.add("inputResDisp");

  totalPayment = (monthlyPay*yrs);
  console.log(totalPayment.toFixed(2));
  inputRes[1].value = totalPayment.toFixed(2);
  inputRes[1].classList.remove("inputResHide");
  inputRes[1].classList.add("inputResDisp");

  totalInterest = ((monthlyPay*yrs)-loanAmount);
  console.log(totalInterest.toFixed(2));
  inputRes[2].value = totalInterest.toFixed(2);
  inputRes[2].classList.remove("inputResHide");
  inputRes[2].classList.add("inputResDisp");
}