// for loop keeps running till the condition is true. Requires three parameters (variable; condition; increment/decrement)

// for(let rep = 1; rep <= 5; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

// for(let rep = 20; rep >= 5; rep--) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

// const jonas = [
//     'jonas',
//     'Schmedtmann',
//     2021-1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ]

// console.log(jonas);

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     console.log((jonas[i]), typeof(jonas[i]));

    // creating types array.
    // types[i] = typeof(jonas[i]);
    // types.push(typeof(jonas[i])); // push method is common to push elements into an array.

// }
 // console.log(types);

 // Backward Loop
// for (let i = jonas.length - 1; i >=0; i--) {
//     console.log(jonas[i]);
// }


// Calculate ages.

// const years = [1992, 1945, 1967, 1996,2015];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2021-years[i]);
// } 
// console.log(ages);

// continue and break

// for (let i = 0; i < jonas.length; i++) {
//     if(typeof(jonas[i]) !== 'string') continue;
//     console.log(jonas[i], typeof(jonas[i]));
// }

// for (let i = 0; i < jonas.length; i++) {
//     if(typeof(jonas[i]) === 'number') break;
//     console.log(jonas[i], typeof(jonas[i]));
// }

//...............While Loop...............// 
// For while loop we just need condition.

// let rep = 1;
// while(rep <= 10){
//     console.log(`Lifting weight repitition ${rep} 🏋️‍♂️`);
//     rep++;
// }

// let dice = Math.trunc(Math.random()* 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//  console.log(`You rolled ${dice} 🤏`);
//  dice = Math.trunc(Math.random()* 6) + 1;
//  if (dice === 6) {
//      console.log('Loop is about to end');
//  }
// }

// Coding Challange 4

/*
1. Create an arrray 'bills' containing all 10 test bill values.
2. Create empty arrays for 'tips' and 'total'.
3. Use the 'calcTip' function we wrote before to calculate the tips and total values for every bill value in the bill array.
   use for loop to perform the 10 calculations.

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 85 and 52.

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument.The function calculates the average of all
   numbers in the given array.

*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 85, 52];
const tips = [];
const total = [];

// creating function to calculate the tips and total values for every bill value.
const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) {
        return(15*bill)/100;
    }  
    else {
        return(30*bill)/100;
    }
}

// iterating for each elements in bills array.
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(tip + bills[i]);
}

console.log(bills, tips, total);

// creating calcAverage function that calculates the average of all numbers
const calcAverage = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(total));