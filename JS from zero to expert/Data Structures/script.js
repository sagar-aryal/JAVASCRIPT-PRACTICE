"use strict";

// Destructuring arrays and objects

const hours = {
  sun: {
    open: 12,
    close: 22,
  },
  thu: {
    open: 10,
    close: 22,
  },
  fri: {
    open: 10,
    close: 22,
  },
  sat: {
    open: 12,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 enhanced object literals
  hours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
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

/*

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

*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

///////////////////////////////////////
// Coding Challenge #1
/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

/*

const players1 = [...game.players[0]];
const players2 = [...game.players[1]];
console.log(players1, players2);

const [gk, ...fieldPlayers] = [...game.players[0]];
console.log(gk, fieldPlayers);

const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

const players1Final = [...game.players[0], "Thiago", "Couthino", "Perisic"];
console.log(players1Final);

// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
// console.log(team1, draw, team2);
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);
};
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

team1 < team2 &&
  console.log(
    "Team1 is more likely to win because it has the lowest bet amount."
  );
// console.log(Math.min(team1, draw, team2));

*/

/*

// The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const item of menu.entries()) console.log(item);

for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

*/
// Optional Chaining
// console.log(restaurant.hours.sun.open);
// console.log(restaurant.hours.mon.open);  // this shows error because it doesn't exist.

// with optional chaining
// console.log(restaurant.hours.sun?.open);
// console.log(restaurant.hoursOpened?.mon?.open); // adding ?. will remove error and undefine if it doesn't exist.

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.hours[day]?.open ?? "closed";
//   console.log(open);
// }

// Methods
// console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist");
// console.log(restaurant.orderRistto?.(0, 1) ?? "Method doesn't exist");

// Arrays
// const users = [{ name: "Jonas", email: "hello@jonas.io" }];
// console.log(users[0]?.name ?? "User array empty");
// if (users.length > 0) console.log(users[0]?.name ?? "User array empty");

// Looping Objects
// const properties = Object.keys(hours);
// console.log(properties);

// let openStr = `We are opened on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// Properties Values
// const values = Object.values(hours);
// console.log(values);

// Entire object
// const entries = Object.entries(hours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

///////////////////////////////////////
// Code Challange #2
/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/
/*
// 1
for (const [i, scorer] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${scorer}`);
}

// 2
console.log(Object.values(game.odds));
let average = 0;
for (const odd of Object.values(game.odds)) {
  average += odd / Object.values(game.odds).length;
}
console.log(average);

// 3
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team, odd);
  const teamName = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamName}: ${odd}.`);
}
*/

/*

// Working with Set()
const orderSet = new Set([
  "pasta",
  "pizza",
  "ristoo",
  "pizza",
  "pasta",
  "Pasta",
]);
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has("pizza"));
console.log(orderSet.has("bread"));
orderSet.add("Bread");
console.log(orderSet);
orderSet.delete("Pasta");
console.log(orderSet);

for (const order of orderSet) console.log(order); // can iterate as in arrays.

// Example
const staff = ["Waiter", "Chief", "Waiter", "Manager", "Chief", "Waiter"];
const staffUnique = [new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(["Waiter", "Chief", "Waiter", "Manager", "Chief", "Waiter"]).size
);

*/

/*

// Working with Map()
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");
console.log(rest);

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are opened!")
  .set(false, "We are closed!");

console.log(rest.get("categories"));
console.log(rest.get("close"));
console.log(rest.get(false));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);
rest.clear();
console.log(rest);

rest.set([1, 2], "Test");
console.log(rest);
console.log(rest.get([1, 2])); // This will be undefined

// This can be fix by defining array outside.
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest);
console.log(rest.get(arr));

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 😍"],
  [false, "Try again 😞"],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(hours));
const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt("Your answer"));
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// Convert map to array
console.log([...question]);

// entries, keys and values
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/
/*
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

console.log(gameEvents);

// 1
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes.`
);

// 4
for (const [key, value] of gameEvents) {
  if (
    key <= 45
      ? console.log(`[FIRST HALF] ${key}: ${value}`)
      : console.log(`[SECOND HALF] ${key}: ${value}`)
  );
}
*/

// Working with Strings
/*
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(airline[0]);
console.log(airline.length);

console.log("A320"[0]);
console.log("A320".length);

console.log(airline.indexOf("o"));
console.log(airline.indexOf("A"));
console.log(airline.lastIndexOf("A"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
console.log(airline.slice(-2));
console.log(airline.slice(2, -2));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats.
  const s = seat.slice(-1);
  s === "B" || s === "E"
    ? console.log(`You got the middle seat 🙂`)
    : console.log(`Sorry! it's not available 😞`);
};
checkMiddleSeat("11B");
checkMiddleSeat("1A");
checkMiddleSeat("23C");
checkMiddleSeat("29E");

console.log(new String("Jonas"));

// Fixing Capitalization in name and making in correct format
const passenger = "JoAnas";
const passengerLower = passenger.toLocaleLowerCase();
console.log(passengerLower);
const passengerCorrect = passenger[0]
  .toUpperCase()
  .concat(passengerLower.slice(1));
console.log(passengerCorrect);

// Fixing emails with white space
const email = "hello@joanas.io";
const loginEmail = " Hello@joanas.Io \n";
const lowerEmail = loginEmail.toLocaleLowerCase();
console.log(lowerEmail);
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// Replacing strings
const priceGB = "288,97€";
const priceUS = priceGB.replace("€", "$").replace(",", ".");
console.log(priceUS);
const newPriceUs = priceUS.replace(priceUS, "234.56$");
console.log(newPriceUs);

const announcement = `All passangers come to boarding door 23. Boarding door 23!`;
console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate")); // Sometimes this might not work so we can do as belows if error occurs.
console.log(announcement.replace(/door/g, "GATE"));

// Booleans
const planeNew = "Airbus A328654neo";
console.log(planeNew.includes("A328"));
console.log(planeNew.includes("A338"));
console.log(planeNew.startsWith("A328"));
console.log(planeNew.startsWith("Air"));
console.log(planeNew.startsWith("Aib"));
*/

// Practice exercise
/*
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not alloiwed on board.");
  } else {
    console.log("Welcome abord!");
  }
};

checkBaggage("I have a laptop, some food and a pocket Knife.");
checkBaggage("Socks and camera.");
checkBaggage("Got some snacks and a Gun for protection.");
*/

// split and join
/*
console.log("a+very+nice+string".split("+"));
console.log("Sagar Aryal".split(" "));

const [firstName, lastName] = "Sagar Aryal".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()];
console.log(newName);

console.log(newName.join(" "));

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica anna smith davis");
capitalizeName("sagar aryal");

// padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+"));
console.log("Jonas".padStart(25, "+"));
console.log("Jonas".padEnd(25, "+"));

// credit card number used padding to hide middle elements
const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(44272067543789));
console.log(maskCreditCard("987653442252536"));

// repeat
const message2 = "Bad weather... All departures delayed!";
console.log(message2.repeat(5));
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/
/*
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
*/

///////////////////////////////////////
// String Methods Practice
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
// 🔴 Delayed Departure from FAO to TXL (11h25)
//    Arrival from BRU to FAO (11h45)
// 🔴 Delayed Arrival from HEL to FAO (12h05)
//    Departure from FAO to LIS (12h30)

console.log(flights.split("+"));

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(":", "h")})`.padStart(45);
  console.log(output);
}
