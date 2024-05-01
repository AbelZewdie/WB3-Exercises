function getNumGrandKids(){
  return 6;
}
// let num = getNumGrandKids()
console.log("# of grandkids is", getNumGrandKids());

console.log(" ")

function add(num1, num2){  //add የfunction መጠርያ ነው።  || num1 እና num2 parameter ናችው። 
  let sum = num1 + num2; // sum አዲስ formula ነው።
  return sum // return አዲሱን formula መጥርያ ነው። 
}
let num1, num2, sum;
num1 = 900;
num2 = 55;
sum = num1 + num2;
console.log("የ", num1, "እና የ", num2, "ድምር", sum, "ነው።")

console.log(" ")
console.log(" ")

function getNumGrandKids(name) {
  let num = 0;
  if (name == "አቤል"){
    num = 6;
  }else if(name == "አማናዊት"){
    num = 3;
  }else if(name == "ቴዎድሮስ"){
    num = 2;
  }
  return num;
}

let num = getNumGrandKids("አቤል");
console.log(num)