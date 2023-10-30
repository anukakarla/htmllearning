console.log("Hello");
let person = {
  name: "Anusha",
  Age: 24,
  graduate: "Yes",
};
console.log(person);
console.log(person.name);
let a = [1, 2, 3, 4, 5];
// console.log(a);
a.push(6);
a.push(7);
a.push(8);

a.pop();
console.log(a);
let firstName = document.getElementById("fName");
let lastName = document.getElementById("lName");
let btn = document.querySelector("button");

const valid = (event) => {
  console.log(firstName.value);
  console.log(lastName.value);
  event.preventDefault();
};

btn.addEventListener("click", (event) => {
  valid(event);
});
