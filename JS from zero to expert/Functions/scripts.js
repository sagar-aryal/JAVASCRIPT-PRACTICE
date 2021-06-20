// function decleration
function greet(name) {
    console.log(`Hello ${name}`);
}

// greet();
// greet('Sagar');
// greet(199);

// function expression
const speak = function(name, time){
    // console.log(`good ${time} ${name}`);
    return `good ${time} ${name}`;
}

// speak();
// speak('Sagar', 'morning');
// console.log(speak('John', 'day'));

//  const calcArea = function(radius){
//     return (3.14 * radius**2);
// }

// const area = calcArea(4);
// console.log(area);

/* The difference between function decleration and function expression is hoisting.But in practice function expression expression where we define our 
function before we call it.
*/

// arrow function
// const calcArea = radius => 3.14 * radius**2;
// console.log(calcArea(4));

// Note: In arrow function we cannot use this keyword.





// Coding Challange 1

/*
Back to the two gymnastics teams, the Dolphins and the Kolas, there is a new gymnastic rules which works differently.
Each team completes 3 times and the average of the three scores is calculated , so one average score average per team.
A team only wins if it has at least double the average score of the other team.Otherwise, no team wins.

1. Create an arrow function 'calcAverage' to calculate the average of three scores.
2. Use the function to calculate for both teams.
3. Create a function 'checkWinner' that takes the average score of each team as a parameter('avgDolphins' and 'avgKoalas'), 
and then log the winner to the console together with the victory point. Example 'Koalas win 30 vs 13'.
4. Use the 'checkWinner' function to determine the winner for both Data1 and Data2.

Test Data1: Dolphins score 44,23 and 71 while koalas score 65, 54 and 49.
Test Data2: Dolphins score 85,54 and 41 whole koalas score 23,43 and 27.
*/

// function calculating avergae scores of three.
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;

// Test Data1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65,54,49);
// console.log(avgDolphins, avgKoalas);

// function for checking the winner.
const checkWinner = (avgDolphins, avgKoalas) => {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}.`);
    }
    else if(avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}.`);
    }
    else {
        console.log('No team wins.')
    }
}
// checkWinner(avgDolphins, avgKoalas);

// Test Data2
// avgDolphins = calcAverage(85,54,41);
// avgKoalas = calcAverage(23,43,27);
// checkWinner(avgDolphins, avgKoalas);

avgDolphins = calcAverage(85,54,41);
avgKoalas = calcAverage(20,10,15);
checkWinner(avgDolphins, avgKoalas);