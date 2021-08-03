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
