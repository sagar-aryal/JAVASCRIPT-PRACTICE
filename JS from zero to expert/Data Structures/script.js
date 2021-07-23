"use strict";

// Destructuring arrays and objects
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};
/*

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// console.log(a, b, c);

const [x, y, z] = arr; // Destructing of an array
console.log(a, b, c);

// const [first, second] = restaurant.categories;
// console.log(first, second);

let [first, , third] = restaurant.categories; // Skiping elements inside an array we simply leave a hole in destructing structure.
console.log(first, third);

// Switching elements within an array
[first, , third] = [third, , first];
console.log(first, third);

// Receive two return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // r will be undefined
const [p = 1, q = 1, r = 1] = [8, 9]; // assigning default values if its not assigned.
console.log(p, q, r); // r will be 1 cos its default value is 1

restaurant.orderDelivery({
  starterIndex: 2,
  mainIndex: 0,
  address: "Rio de Helsinki",
  time: 11.25,
});

*/

/*

// The Spread Operator(...)
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // Spread operator takes all the elements from an entire array.
console.log(newArr);
console.log(...newArr); // Prints values individually

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  pastaIngredients: function (ing1, ing2, ing3) {
    console.log(`Lets have a pasta with ${ing1}, ${ing2} and ${ing3}.`);
  },
};



const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copying an entire array and merging together.
const allMenuCopy = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(allMenuCopy);

const str = "Jonas";
const letters = [...str, "", "S"];
console.log(letters);
console.log(...str);

// Real world examples
const ingrdeients = [
  prompt("Ingredient1"),
  prompt("Ingredient2"),
  prompt("Ingredient3"),
];
// Old way
// restaurant.pastaIngredients(ingrdeients[0], ingrdeients[1], ingrdeients[2]);
// Spread Operator method way
restaurant.pastaIngredients(...ingrdeients);


// Since 2018 spread operators too work with an objects
const newRestaurant = { ...restaurant, founder: "Jesus", foundedIn: 1992 };
console.log(newRestaurant);
console.log(restaurant.name);
console.log(newRestaurant.name);

*/

/*

// Rest Pattern and Parameters
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other);

// Objects
const [pizza, risotte, ...others] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotte, others);

// Functions
const add = function (...numbers) {
  //console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(1, 2, 3, 4, 5);
add(1, 2, 4, 5, 7, 9, 3, 5, 6, 5);

restaurant.orderPizza("mushroom", "onion", "olives", "spinach");
restaurant.orderPizza("mushroom");

*/

// Short Circuting (&& and ||)
console.log(3 && "Jonas");
console.log("Joanas" && 3);
console.log("Hello" && undefined && " " && 23 && null);
// && returns the truthy value if all the values are true and always returns the last truthy value or the first falsy value.

console.log(3 || "Jonas"); // short circuting means when it gets truthy value it display the value immediately and doesn't go further.
console.log(false || true);
console.log(0 || true);
console.log(undefined || null);
console.log(0 || "" || false || undefined || null || "Hello" || 234);
//0, false, undefined('') are falsey values.

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "spinach", "onion");
}
restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach", "onion"); // We can do above if function using && operator.

// Nullish Coalescing Operator(??)
// Nillish works only with null and undefined but not with 0 or ' '
// restaurant.numGuest = 0;
const guests = restaurant.numGuest || 5;
console.log(guests);

const correctGuests = restaurant.numGuest ?? 10;
console.log(correctGuests);
