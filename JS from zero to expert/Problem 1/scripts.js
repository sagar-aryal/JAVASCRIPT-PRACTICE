"use strict";

// Exercise 1

/*

We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day.
calculate the temperature amplitude. keep in mind that sometimes there might be a sensor error."

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

1) Understand the problem.
- What is the temp amplitude? Answer: Difference between highest temperature and lowest temperature.
- How to compute max and min temperature?
- What's a sensor error and what to do?

2) Breaking into sub-problems
- How to ignore errors?
- find max value in temp array.
- find min value in temp array.
- subtract min from max (amplitude) and return it.

*/

// const temp = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// Creating function to find the maximum and minimum value in temperature array.
// const tempAmp = (temps) => {
//   let maxTemp = 0;
//   let minTemp = 0;
//   for (let i = 0; i < temps.length; i++) {
//     if (temps[i] > maxTemp) {
//       maxTemp = temps[i];
//     }
//     if (temps[i] < minTemp) {
//       minTemp = temps[i];
//     }
//   }
//   console.log(maxTemp, minTemp);
//   return maxTemp - minTemp;
// };

// const amplitude = tempAmp(temp);
// console.log(amplitude);

// Exercise 2
// Converting temperature from degree to kelvin.

// const measureKelvin = () => {
//   const measurement = {
//     type: "trmp",
//     unit: "celsius",
//     //value: prompt("Degrees celsius"), // NOTE: prompt method always returns string. We need to convert string to number to fix this.
//     value: Number(prompt("Degrees celsius")),
//   };
//   console.log(measurement);
//   // console.log(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// Code Challange: Problem 1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Examples: [17, 21, 23] will print "...17°C in 1 days ... 21°C in 2 days ...23°C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Test Data 1: [17, 21, 23]
Test Data 2: [12, 5, -5, 0, 4]
*/

const printForecast = (arr) => {
  let i = 0;
  let str = " ";
  while (i < arr.length) {
    str = str + `...${arr[i]}°C in ${i + 1} days`;
    i++;
  }
  return str;
};

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

console.log(printForecast(arr1));
console.log(printForecast(arr2));
