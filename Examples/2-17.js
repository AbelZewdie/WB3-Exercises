let namesTextString = "San Francisco,Dallas,Atlanta,Hartford";
const delimiter = ",";
let cityArrayList = namesTextString.split(delimiter);
// The array resembles the following
// position 0 - value "San Francisco"
// position 1 - value "Dallas"
// position 2 - value "Atlanta"
// position 3 - value "Hartford"

//first Way
// for (let index = 0; index < cityArrayList.length; index++) {
// console.log(cityArrayList[index]);

// }
// console.log("THE END");

//first Way
for (let index = 0; index < cityArrayList.length; index++) {
  let city = cityArrayList[index];
  console.log(`position ${index} - value "${city}"`);

  }
  console.log("THE END");