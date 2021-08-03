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

lufthansa.book(234, "Sagar Aryal");
lufthansa.book(427, "Joanas Schmedamnn");
console.log(lufthansa.bookings);

const eurowings = {
  airline: "eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// book(239, "Sarah Williams");
// Doesn't work with this keyword while coping a function from above object

book.call(eurowings, 239, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 234, "Sagar Aryal");
console.log(lufthansa);

const swiss = {
  airline: "swiss air lines",
  iataCode: "SW",
  bookings: [],
};

book.call(swiss, 234, "John Mark");
console.log(swiss);
