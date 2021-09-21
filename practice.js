// const whichSchool  = function (age) {
//   if (age <13){
//   return "Elementary School";
//   } else if (age >= 13 && age <= 18) {
//   return "Secondary School";
//   } else {
//   return "Lighthouse Labs";
//   }
// }
// console.log(whichSchool(15))

// let x = 1

// while (x <= 20){
//   if (x % 15 == 0){
//     console.log("JuliaJames")
//   } else if (x % 5 == 0){
//     console.log("James")
//   } else if (x % 3 == 0){
//     console.log("Julia")
//   } else {
//     console.log(x)
//   }
//   x = x + 1;
// }


// let num = 99;
// let x = 98;
//  while (num <= 99 && num >= 1){
//    if (num === 1){
//     console.log(num+" bottle of juice on the wall! "+num+" bottle of juice! Take one down, pass is around... "+x+" bottles of juice on the wall!")
//    } else{
//     console.log(num+" bottles of juice on the wall! "+num+" bottles of juice! Take one down, pass is around... "+x+" bottles of juice on the wall!")
//    }
//   num = num - 1;
//   x = x - 1;
//  }

// x = 60;
// while (x >= 0){
//   if (x === 50){
//     console.log("Orbiter transfers from ground to internal power")
//   } else if (x === 31){
//     console.log("Ground launch sequencer is go for auto sequence start")
//   } else if (x === 16){
//     console.log("Activate launch pad sound suppression system ")
//   } else if (x === 10){
//     console.log("Activate main engine hydrogen burnoff system")
//   } else if (x === 6){
//     console.log("Main engine start")
//   } else if (x === 0){
//     console.log("Solid rocket booster ignition and liftoff!")
//   } else {
//     console.log("T-"+x+" seconds");
//   }
//   x = x - 1;
// }  

// let solution = 1;

// for (let i = 1; i <= 12; i++) {
//   solution *= i;
// }

// console.log(solution);

// for (var x = 0; x <= 25; x++) {
//   for (var y = 0; y <= 99; y = y + 1) {
//     console.log(x + "-" + y);
//   }
// }

// let x = 0;
// for (let i = 0; i <=10; i++){
//   console.log(i);
// }



// let result = "";
// function laugh(num) {
//       for (let i = 0; i < num; i++){
//       result = result + "ha";
//       }
//     result = result + "!";
//     return result;
// }
// console.log(laugh(6));

// function isThisWorking(input) {
//   console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
//   return "Returning: I am returning this string!";
// }

// isThisWorking(3);

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(x){
  var row = "";
  for (let i = 1; i <= x; i++){
    row += makeLine(i);
  }
  return row;
}
console.log(buildTriangle(72)); 
