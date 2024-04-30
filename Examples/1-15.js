function add(num1, num2) {
  let sum = num1 + num2;
  return sum;
  }
  // elsewhere
  let a = 10, b = 20, c;
  c = add(a, b);
  console.log("The sum of " + a + " and " + b + " is " + c);