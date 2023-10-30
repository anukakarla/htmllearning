// var myFrnds = ["anu", 24, "sai", 25, "sanju", 25, "vijju", 25, true];
// console.log(myFrnds);
// // to find length
// console.log(myFrnds.length);

var myFamily = [
  "KOteswar Reddy",
  "Sugaveni",
  "Aiswarya",
  "Anusha",
  "Malli Karjun Reddy",
  "Sayamma",
];

//for in loop [ it will show index values]

// for (const key in myFamily) {
//   console.log(key);
// }

//for of loop [it will show elements which are present in my family array]
// for (const elements of myFamily) {
//   console.log(elements);
// }

//for each
// array.forEach((element) => {}); // for each loop with anynomous function.
// myFamily.forEach(function (element, index, array) {
//   console.log(element + "  index " + index + " " + array);
// });
myFamily.forEach((element, index, array) => {
  console.log(element);
  console.log(index);
});
