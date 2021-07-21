"use strict";

/*

function calcAge(birthYear) {
  const currentAge = 2021 - birthYear;
  // console.log(firstName, lastName);

  function output() {
    const print = `${firstName} ${lastName} who was born in ${birthYear} is ${currentAge} years old.`;
    console.log(print);

    // block-scoped
    if (currentAge >= 18 && currentAge <= 40) {
      var command = "Basecamp";
      const str = `${firstName} you are in pefrect period for millitary work.`;
      console.log(str);
    }
    // console.log(str); // block-scope cannot be defined outside the block.
    console.log(command); // functional-scope can be defined outside the block.
  }

  output();
}
// Global Vaiables
const firstName = "Sagar";
const lastName = "Aryal";
calcAge(1992);

*/

// console.log(me);
// console.log(job);
// console.log(birthYear);

// variables cannot be called before initialization.

// var me = "Sagar";
// let job = "Web Developer";
// const birthYear = 1992;

// Functions
// console.log(addDecleration(2, 3));
// console.log(addExpression(2, 3));
// console.log(addArrow(2, 3));

// function addDecleration(a, b) {
//   return a + b;
// }
// The only function that we can use is function declaration before defining a function.
// Function expression and arrow function cannot access before initialization.
// const addExpression = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => {
//   return a + b;
// };

// Differences with let const and var

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// this keyword (Regular Function and Arrow Function)

// console.log(this); // this keyword is the window keyword.

// this keyword with method
// const jonas = {
//   firstName: "Joanas",
//   year: 1992,
//   calcAge: function () {
//     console.log(2021 - this.year);
//   },

// greet: () => {
//   // If we use arrow function in method then this function doesnot work. Always use regular function to make this keyword work.
//   console.log(`Hey ${this.firstName} born in ${this.year}.`);
// },

//   greet: function () {
//     console.log(`Hey ${this.firstName} born in ${this.year}.`);
//   },
// };
// jonas.calcAge();
// jonas.greet();

// this keyword with function expression
// const calcAgeFunction = function (birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this);
// };
// calcAgeFunction(1993);

// this keyword with arrow function
// const calcAgeArrow = (birthYear) => {
//   console.log(2021 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1994);

// const matila = {
//   year: 2001,
// };
// we can copy same method of jonas object to matila object too.
// matila.calcAge = jonas.calcAge;
// matila.calcAge();

// const jonas = {
//   firstName: "Joanas",
//   year: 1992,
//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.year);

// this keyword doesnot work here with regular function. We can define this key word before method call so it works.
// Solution 1
// const self = this;
// const isMillenial = function () {
// console.log(this);
// console.log(this.year >= 1981 && this.year <= 1996);
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// },

// Solution 2 . This can be solved by using arrow function which use this keyword from parent element.
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
// };

// jonas.calcAge();

// Arguments keyword. This is available only in regular function. This doesn't work with arrow function.
// const addExpr = function (a, b) {
//   console.log(arguments;
//   return a + b;
// };
// addExpr(2, 3);
// addExpr(2, 3, 4, 6, 7);

// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 3);
// addArrow(2, 3, 4, 6, 7);

// Primitives vs Objects
// Primitives types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "David";
console.log(lastName);
console.log(oldLastName);
// Note: primitive values are stored in the stack so we cannot change their value because they are immutable.

// Reference types
/*

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 29,
};
const marriedJessica = jessica;
marriedJessica.lastName = "David";
console.log("Before marriage lastname:", jessica.lastName);
console.log("After marriage lastname:", marriedJessica.lastName);
// Note: Refrences values are stored in the heap so we can change their value because they are mutable.

*/

// Copying objects
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 29,
  family: ["Sagar", "Shardha", "Ram"],
};

const jessicaCopy = Object.assign({}, jessica);
console.log(jessicaCopy);
// Note: It only works with first level using Object.assign() technique.
jessicaCopy.lastName = "David";
console.log(jessicaCopy);
jessicaCopy.family.push("John", "Michael");
console.log(jessica);
console.log(jessicaCopy);
