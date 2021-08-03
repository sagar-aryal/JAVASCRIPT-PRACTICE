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
