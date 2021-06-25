"use strict";

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

const temp = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// Creating function to find the maximum and minimum value in temperature array.
const tempAmp = (temps) => {
  let maxTemp = 0;
  let minTemp = 0;
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > maxTemp) {
      maxTemp = temps[i];
    }
    if (temps[i] < minTemp) {
      minTemp = temps[i];
    }
  }
  console.log(maxTemp, minTemp);
  return maxTemp - minTemp;
};

const amplitude = tempAmp(temp);
console.log(amplitude);
