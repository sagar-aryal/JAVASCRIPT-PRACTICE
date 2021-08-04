"use strict";

/*
const bookings = [];

const createBooking = function (
  flightName,
  numPassengers = 1, // we can write default value directly here inide parenthesis.
  price = 199 * numPassengers
) {
  const booking = {
    flightName,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123", 5);
createBooking("LH123", 5, 800);
createBooking("LH123", undefined, 1000); // if we need to use default value, we need to use undefined.

console.log(bookings);
*/

/*
const flight = "LM123";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 23456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr.".concat(passenger.name);

  passenger.passport === 23456789
    ? alert("Checked In!")
    : alert("Wroung passport!");
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
*/

/*
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// High-order function
const transformer = function (str, fun) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fun(str)}`);
  console.log(`Transformed by: ${fun.name}`);
};

transformer("JavaScript is the best", upperFirstWord);
transformer("JavaScript is a Popular Language", oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", high5);

["Jonas", "Martha", "Adam"].forEach(high5);
*/

/*
// Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Sagar");
greeterHey("Joanas");
// This can be simply written like this too.
greet("Hey")("Sagar");
greet("Hey")("Joanas");

// Use arrow function for the above example.
const greetArrow = (greeting) => (name) => {
  console.log(`${greeting} ${name}`);
};
greetArrow("Hello")("Arrow");
*/

/*
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    // this is similar to writing function book: function() {.......}
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(234, "Sagar Aryal");
// lufthansa.book(427, "Joanas Schmedamnn");
// console.log(lufthansa.bookings);

const eurowings = {
  airline: "eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// book(239, "Sarah Williams");
// Doesn't work with this keyword while coping a function from above object

// book.call(eurowings, 239, "Sarah Williams");
// console.log(eurowings);

// book.call(lufthansa, 234, "Sagar Aryal");
// console.log(lufthansa);

const swiss = {
  airline: "swiss air lines",
  iataCode: "SW",
  bookings: [],
};

// book.call(swiss, 234, "John Mark");
// console.log(swiss);

// Apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookEW(238, "Steven Williams");
bookSW(123, "Sagar Aryal");

const bookEW233 = book.bind(eurowings, 233, "JOANAS SCHEMNNAND"); // setting arguments already in method.
bookEW233();

const bookEW234 = book.bind(eurowings, 234); // setting few arguments already in method.
bookEW234("JOANAS SCHEMNNAND".toLocaleLowerCase());

// With Event Listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
//if we don't bind function with main lufthansa object it doesn't work.
// bind method pass function and call method calls function

// Partial application

const addTax = (rate, value) => {
  return value + value * rate;
};

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

/*
const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

  answers: new Array(4).fill(0), // This generates [0,0,0,0]
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(`${this.question}\n${this.options.join("\n")}`)
    );
    console.log(answer);

    // Register answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    console.log(this.answers);
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

// poll.registerNewAnswer();
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [1, 2, 3] });
poll.displayResults.call({ answers: [1, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 2, 3, 4, 5, 6] }, "string");
*/

/*
const runOnce = function () {
  console.log("This will never run again.");
};
runOnce();

// Immediately invoked function expression
(function () {
  console.log("This will never run again and again in easy way.");
})();
*/

// Closures
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers.`);
  };
};

const booker = secureBooking(); // Here booker is function not a variable.

booker();
booker();
booker();
*/
/*
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Re-assigning f function.
h();
f();

console.dir(f);

// Example 2
const boardPassenger = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`There are 3 groups, each with ${perGroup} passengers.`);
  }, 1000);

  console.log(`Will start boarding in ${wait} seconds.`);
};

boardPassenger(100, 3);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
