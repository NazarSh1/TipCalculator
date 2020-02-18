
function calculateTip() {
  var amountB = document.getElementById("amountB").value;
  var chooseOption = document.getElementById("chooseOption").value;
  var amountPeople = document.getElementById("amountPeople").value;

  var result= (amountB * chooseOption) / amountPeople;
  result = Math.round(result * 100) / 100;
  result = result.toFixed(2);
  document.getElementById("resultTip").innerHTML = result;
}

document.getElementById("calculate").onclick = function() {
  calculateTip();

};