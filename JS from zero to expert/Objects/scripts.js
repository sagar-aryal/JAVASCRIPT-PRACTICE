// array

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2021-1991,
//     'teacher',
//     ['Michael', 'Sagar', 'Lincon', 345]
// ];

// console.log(jonasArray);


// object with key-value pair

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     // age: 2021-1991,
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Sagar', 'Lincon', 345],
//     hasDriverLicence: true,

    // calcAge: birthYear => (2021-birthYear)

    // calcAge: function() {
    //     return 2021 - this.birthYear; // NOTE: THIS KEY DOESN'T WORK WITH ARROW FUNCTION.
    // }

//     calcAge: function() {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function() {
//         this.summary = `${jonas.firstName} is a ${this.calcAge()} years old teacher, and has ${this.age >= 18 ? 'a' : 'no'} driver licence.`;
//         return this.summary;
//     }

// }

// console.log(jonas);

// In js object we can retrive data from object in two ways either using dot or using [ ] braces.
// console.log(jonas.firstName);
// console.log(jonas['firstName']);

// const answer = prompt('What do you want to know about jonas? firstName, lastName, age, job or friends')
// jonas[answer] ? console.log(jonas[answer]) : console.log('Wroung field entry');

// adding objects
// jonas.location = 'Finland';
// jonas['instagram'] = 's9rays';
// console.log(jonas);

// Challange
// Jonas has 4 friends and his bestfriend name is 'Michael'. Write code for getting this.

// const bestfriend = jonas.friends[0];
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his bestfriend name is ${bestfriend}.`);

// console.log(jonas.calcAge(1992));
// console.log(jonas['calcAge'](1992));

// console.log(jonas.calcAge());

// console.log(jonas.age);

// CHALLANGE
// Create a method: 'Jonas is a 46 years old teacher, and he has a driver's license.'
// console.log(jonas.getSummary());

// Coding Challange 3
/*

Lets go back for Mark and John comparing their BMIs. This time, lets use objects to implement the calculations. Remember: BMI = mass / height ** 2. 
mass in kg and height in kg.
1. for each of them, create an object with properties for their full name, mass and height (Mark Miller and John Smith)
2. calculate a 'calcBMI' method on each object to calculate the BMI. Store the BMI value to property and also return it from method.
3. Log to the console who has the higher BMI together with the full name and resprctive BMI. Example 'John's BMI 28.3 is higher then Mark's BMI 23.9 !'

TEST DATA: Mark weights 78 kg and is 1.69 m tall, John weights 92 kg and is 1.95 m tall.

*/

// Creating an object properties for their full name, mass and height.
const person = {
    person1: {
        firstName: 'Mark',
        lastName: 'Miller',
        mass: 78,
        height: 1.69,
        // Creating calcBMI method to calculate the BMI of person1.
        calcBMI: function() {
            let BMI = this.mass / (this.height ** 2);
            return BMI;
        }
    },
    person2: {
        firstName: 'John',
        lastName: 'Smith',
        mass: 92,
        height: 1.95,
        calcBMI: function() {
            let BMI = this.mass / (this.height ** 2);
            return BMI;
        }

    }
}

console.log(person);

const person1BMI = Math.round(person.person1.calcBMI());
const person2BMI = Math.round(person.person2.calcBMI());

person1BMI > person2BMI ? console.log(`${person.person1.firstName}'s BMI ${person1BMI} is higher than ${person.person2.firstName}'s BMI ${person2BMI}.`) : 
console.log(`${person.person2.firstName}'s BMI ${person2BMI} is higher than ${person.person1.firstName}'s BMI ${person1BMI}.`);