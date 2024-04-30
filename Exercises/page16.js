function displayMailingLabel(name, address, city, state, zip){
console.log(name, address);
console.log(city, state, zip);
}
displayMailingLabel("Abel", "Ethiopia", "Addis Ababa", "Shola", "0923")

function addNumbers(num1, num2){
  console.log(num1, "+", num2, "=", num1 + num2)
}
addNumbers(898,845)
addNumbers(900, 98)
function displayReceipt(totalDue, amountPaid){
  console.log("Total DUe:", totalDue);
  console.log("Amount Paid:", amountPaid);
  console.log("--------------------")
  console.log("Change Due:", totalDue - amountPaid)
}

displayReceipt(560, 890)

