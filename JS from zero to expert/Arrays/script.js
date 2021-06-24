// Arrays and Objects

// const friends = ['Sagar', 'Michael', 'John', 'Alex']
// console.log(friends);

// We can also create array by using new Array()
// const years = new Array(1991, 1993, 1998, 2013, 2020);
// console.log(years);

// console.log(friends.length);
// console.log(friends[0]);
// console.log(friends[5]);

// To get last element of array we use array length -1 .
// console.log(friends[friends.length-1]);

// Replacing element inside an array.
// friends[2] = 'Jay';
// console.log(friends);

/* NOTE: Arrays are primite values so they are mutable.So we can change element inside an array though its assign as const.
   But we cannot change all the values inside the arrays.
*/

// we can use any data types inside an array.
// const firstName = 'Sagar';
// const randomUsers = ['Michael', firstName, 2001, 'Lincon'];
// console.log(randomUsers);

// Exercise
// const calcAge = function(birthYear){
//     return 2021-birthYear;
// }

// const age = calcAge(1992);
// console.log(age);

// const years = new Array(1991, 1993, 1998, 2013, 2020);

// console.log(calcAge(years)); //gives NaN.
// console.log(calcAge(years[0]));
// console.log(calcAge(years[3]));
// console.log(calcAge(years[years.length - 1]));

// const ages = [calcAge(years[0]), calcAge(years[3]), calcAge(years[years.length - 1])];
// console.log(ages);

// using methods in arrays
// const friends = ['Sagar', 'Michael', 'John', 'Alex']

// push method helps to add an element at the end of an array list.
// friends.push('Shardha');
// console.log(friends);

// unshift method helps to add elmenent at the front of an array list.
// friends.unshift('Sajana');
// console.log(friends);

// pop method helps to remove elmenent at the end of an array list.
// friends.pop();
// console.log(friends);

// shift method helps to add elmenent at the front of an array list.
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('John'));   // gives index number.

// console.log(friends.includes('John'));
// console.log(friends.includes('Sajana'));
// console.log(friends.includes(23));

// if (friends.includes('John')) {
//     console.log('You have a friend named John');
// }
  
// Coding Challange 2
/*
Steven is still building his tip calculator using the same rule
as before: Tip 15% of the bill if the bill value is between 50 and 300
and if the value is different the tip is 30%.

1. Write a function 'calcTip' that takes any bill value as an input
and returns the corresponding tip, calculated based on the rules above,
use the function type you like the most.Test the function using bill value of 100.
2. And now lets use arrys.So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each, calculated from the function you
created below.
4. Bonus: Create an array 'total' containing the total values so the bill + tip.

TEST DATA: 125, 555 and 44.

*/
// function for calculating tip
const calcTip = (bill) => {
if (bill >= 50 && bill <= 300) {
   return (15*bill)/100;}

else {
   return (30*bill)/100;
}
}

// Testing function using bill value of 100
let tips = (calcTip(100));
console.log(tips);

// Creating an arrays of bills.
const bills = [125, 555, 44]

// Creating an arrays of tips.
 tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
 console.log(bills, tips);

// Creating an arrays of total.
const total = [];
for(let i = 0; i < bills.length; i++) {
   total.push(bills[i] + tips[i]);
}
console.log(total);




