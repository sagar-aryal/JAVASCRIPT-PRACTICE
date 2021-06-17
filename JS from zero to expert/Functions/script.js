'use strict';

/*

// use strict example why we need to use.

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive :D");

// const interface = 'Audio'; 
// const private = 543;

*/

/*

// function decleration

function logger() {
    console.log("My name is Sagar.")
}

// invoking or running or calling the function that we defined previously and we can run as many times as we want to execute.
logger();   
logger();
logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    //console.log(juice);
    return juice;
}

//fruitProcessor(5, 0);
const mixJuice = fruitProcessor(5, 0);
console.log(mixJuice);

const appleOrangeJuice = fruitProcessor(6, 8);
console.log(appleOrangeJuice);

// Functions let us to reuse code just calling it instead of writing it again and again. Implement DRY(Don't Repeat Yourself) code.

const num = Number('23');

*/

/*

// function expression
const calcAge1 = function(birthYear){
    return(2021 - birthYear);
}

const currentAge = calcAge1(1992);
console.log(currentAge);

*/

/*

// Arrow function
const calcAge = birthYear => 2021 - birthYear;
const currentAge = calcAge(1992);
console.log(currentAge);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 -birthYear;
    const retirement = 65 - age;
    //return retirement;
    return (`${firstName} retires in ${retirement} years.`)
}

console.log(yearsUntilRetirement(1992, 'Sagar'));

*/

/*

// functions calling other functions.

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

*/

// Coding Challange #1

/*

Back to the two gymnastics teams, the Dolphins and Koalas! There is a new gymnastics discipline, which works differently.
Each teams complete 3 times, and the average of the 3 scores is calculated (so one score average per team).
A team only wins if it has double scores of other team.Otherwise, no team wins.

1. Create an arrow function 'calcAverage' to calculate the average of the three scores.
2. Use the function to calculate the average for both teams.
3. Create function 'checkWinner' that takes the average scores for each team as parameters ('avgDolphins' and 'avgKoalas') and then log the winner
   the console, together with the victiry points, according thee rule above.Example:"Koalas win 30 vs 13."
4. Use the 'checkWinnwer function to determine the winner for both DATA1 and DATA2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49.
Test DAta 2: Dolphins score 85, 54 and 41. Koalas score 85, 54 and 41.

*/

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;

// TEST DATA 1
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65,54,49);
// console.log(avgDolphins, avgKoalas);

// TEST DATA 2
 let avgDolphins = calcAverage(85, 54, 41);
 let avgKoalas = calcAverage(85,54,41);
 console.log(avgDolphins, avgKoalas);



const checkWinner = (avgDolphins, avgKoalas) => {
    if(avgDolphins >= 2 * avgKoalas) {
        return(`Dolphins win ${avgDolphins} vs ${avgKoalas}.`);
    }
    else if(avgKoalas >= 2 * avgDolphins) {
        return(`Koalas win ${avgKoalas} vs ${avgDolphins}.`);
    }
    else {
        return "No team wins."
    }
}

console.log(checkWinner(avgDolphins, avgKoalas));

// TEST DATA 3
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(5,5,1);
console.log(avgDolphins, avgKoalas);
console.log(checkWinner(avgDolphins, avgKoalas));

