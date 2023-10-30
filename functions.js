// 1.NAmed function:the function which has name
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20));

// 1.b function depend on another function

function voteForAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
function resultForVote(result) {
  if (result === true) {
    console.log("Eligible for vote");
  } else {
    console.log("not eligible for vote");
  }
}
var result = voteForAge(1);
resultForVote(result);

//anonymous function : function doesnt have any name

var findProduct = function (a, b) {
  console.log(a * b);
};
findProduct(2, 3);
//another example for anonymus function
var findProduct = function (a, b) {
  return a * b;
};
// console.log(findProduct);
var product = findProduct(12, 3);
console.log(product);

//self invoked function expression : automatically excuted (immediately invoked function)
// (function(arg1,arg2,arg3,....){

// })(arg1,arg2,arg3,...)

(function (a, b, c) {
  console.log(a * b * c);
})(10, 20, 30);

//arrow function
// 1.if there is a single parameter parenthsis is not mandatory
// ()=>{

// }

//2.
// arg1=>{
//code
// }

// 3.
// (arg1,arg2)=>code

// 4.
// arg1=>arg1*arg1
var greet = () => {
  console.log("Good Morning");
};
greet();
