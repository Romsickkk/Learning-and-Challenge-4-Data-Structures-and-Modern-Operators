// // Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelevery({
    mainIndex = 1,
    starterIndex = 1,
    time = "20:00",
    address = "Via del Sole, 21",
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta wit ${ing1}, ${ing2}, ${ing3},`);
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

// // //======================================================================================
// // // Working With Strings - 3

// // Split and join
// console.log("a+very+nice+string".split("+"));
// console.log("Roman Babayan".split(" "));
// const [firstName, lastName] = "Roman Babayan".split(" ");

// const newName = ["Mr.", firstName, lastName.toLocaleUpperCase()].join(" ");
// console.log(newName);
// const capitalizeName = function (name) {
//   const names = name.split(" ");
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(" "));
// };
// capitalizeName("jessica ann smith davis");
// capitalizeName("roman babayan");

// // Padding
// const message = "Go to gate 23!";
// console.log(message.padStart(25, "+").padEnd(35, "+"));
// console.log("Roma".padStart(23, "+").padEnd(35, "+"));

// const maskCreditCard = function (number) {
//   const str = number + "";

//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };
// console.log(maskCreditCard(1241267419846127846));
// console.log(maskCreditCard("91238712934541248907"));

// // Repeat
// const message2 = "Bad wather... All Departues Delayed... --- ";
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(8);
// planesInLine(12);
// planesInLine(8);
// planesInLine(5);
// //======================================================================================
// // Working With Strings - 2
// const airline = "TAP Air Portugal";

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passanger = "jOnAS";
// const passangerLower = passanger.toLocaleLowerCase();
// const passangerCorrect =
//   passangerLower[0].toUpperCase() + passangerLower.slice(1);
// console.log(passangerCorrect);

// function rightPasangereName(name) {
//   const nameLower = name.toLowerCase();
//   return nameLower[0].toUpperCase() + nameLower.slice(1);
// }
// console.log(rightPasangereName("rOma"));

// // Chack email
// const email = "hello@roma.io";
// const loginEmail = "  Hello@roma.io \n";

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceGB = "288,97£";
// const priceUS = priceGB.replace("£", "$").replace(",", ".");
// console.log(priceUS);

// const announcement =
//   "All passengers come to boarding door 23. Boarding door 23!";

// // console.log(announcement.replace("door", "gate"));
// // console.log(announcement.replaceAll("door", "gate"));

// console.log(announcement.replace(/door/g, "gate"));

// // Booleans
// const plane = "Airbus A320neo";
// console.log(plane.includes("A320"));
// console.log(plane.includes("Boeing"));
// console.log(plane.startsWith("Airbus"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
//   console.log("Part o the NEW Airbus family");
// }

// // Practice exercise
// const checkGaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are NOT allowed on board.");
//   } else {
//     console.log("Welcome aboard!");
//   }
// };

// checkGaggage("I have a laptp, sme Food and pocket Knife");
// checkGaggage("Socks and camera");
// checkGaggage("Gote some snacks and a gun for protection");
//======================================================================================
// Working With Strings - 1
// const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log("B737"[0]);

// console.log(airline.length);
// console.log("B737".length);

// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));
// console.log(airline.indexOf("portugal"));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") console.log("You got the middle seat 😊");
//   else console.log("You got lucky 🎉");
// };
// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log(new String("jonas"));
// console.log(typeof new String("jonas"));

// console.log(typeof new String("jonas").slice(1));
//// ===========================MAP MONIPULATIONS=================================
// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct 😍"],
//   [false, "Try again 😢"],
// ]);
// console.log(question);
// //Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Quiz app
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const answer = Number(prompt("Your answer"));
// // answer === question.get("correct")
// //   ? console.log(question.get(true))
// //   : console.log(question.get(false)); ///// MY ANSWER

// console.log(question.get(question.get("correct") === answer));
// console.log(...question);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([question.values(

// )]);
// const arrdot = [...question];
// console.log(arrdot[1]);

// // Maps: Fundamentals
// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// rest.set(2, "Lisabon, Portugal");

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open")
//   .set(false, "We are close");

// // console.log(rest.get("name"));
// // console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
// console.log(rest.has("categories"));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// // console.log(rest.clear());
// const arr = [1, 2];

// rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);
// console.log(rest.get(arr));

// const arr = [...new Set(["asd", "qwe", "zxc", "asd", "asd", "xcv", "qwe"])];

// console.log(arr[3]);

/////////////////////////////////////////////////////////////////////////
// // Sets
// const orderSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);

// const arr = ["Roma", "Roma", "Gevor", "Armen", "Roma"];
// const arrSet = new Set(arr);
// console.log(arrSet);
// console.log(orderSet);
// console.log(new Set("Roma"));
// console.log(orderSet.size);
// console.log(orderSet.has("Pizza"));
// console.log(orderSet.has("Bread"));
// orderSet.add("Garlic Bread");
// orderSet.add("Garlic Bread");
// orderSet.delete("Risotto");
// // orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

//Example
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Waiter"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(["Waiter", "Chef", "Waiter", "Manager", "Waiter"]).size);

// console.log(new Set("Roman").size);
// //==========================================================================================
// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open an ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

//Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entrie object
// const entries = Object.entries(openingHours);
// // console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// const someArr = {
//   day1: {
//     open: { nameOne: "2", nameTwo: "3" },
//     close: { nameOne: "2", nameTwo: "3" },
//   },
//   // day2: { open: 3, close: 4 },
// };
// console.log(someArr);
// let someA = Object.entries(someArr.day1);
// console.log(someA);

// for (const [key, { nameOne, nameTwo }] of someA) {
//   console.log(
//     `In array ${key} i hve 2 values. First value is ${nameOne} and second value is ${nameTwo}`
//   );
// }
// ////////////////////////////////
// //Optional Chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// //Width optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// //Example
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";

//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// //Arrays
// const users = [{ name: "Roma", email: "hello@roma.io" }];
// console.log(users[0]?.name ?? "User array empty");
// console.log(users[1]?.name ?? "User array empty");

// if (users.length > 0) {
//   console.log(users[0].name);
// } else console.log("User array empty");

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const key of menu) {
//   console.log(key);
// }
// for (const key of menu.entries()) {
//   console.log(`${key[0] + 1}: ${key[1]}`);
// }
// // (value) => console.log(`${value[0] + 1}: ${value[1]}`)
// menu.entries().map((value) => console.log(`${value[0] + 1}: ${value[1]}`));
// const rest1 = {
//   name: "Carpi",
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanni Rossi",
// };

// OR assigment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish OR assigment operator (null or undeined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND  assigment operator
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";
// rest1.owner &&= "<ANONYMOUS>";
// rest2.owner &&= "<ANONYMOUS>";

// console.log(rest1);
// console.log(rest2);

// /// Use any data type, return any data type, short-cicuiting
// console.log("----- OR ----");
// console.log(3 || "Roma");
// console.log("" || "Roma");
// console.log(true || 0);
// console.log(undefined || null);
// console.log(false || Number);

// console.log(undefined || 0 || "" || "Hello" || 23 || null);

// // restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log("----- AND ----");

// console.log(0 && "Roma");
// console.log(7 && "Roma");
// console.log(false && true);

// console.log("Hello" && 23 && null & "jonas");

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinac");
// }

// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinac");

// // restaurant.orderPizza("mushrooms", "onion", "olives", "spinatch");

// // restaurant.orderDelevery({
// //   time: "22:30",
// //   address: "Via del Sole, 21",
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// // restaurant.orderDelevery({
// //   address: "Via del Sole, 21",
// //   starterIndex: 1,
// // });

// ///// Add in array
// // const arr = [5, 6, 7];
// // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);

// // const newArr = [1, 2, ...arr];
// // console.log(newArr);

// ///// Experement
// // const newArr1 = [3, 4];

// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] != 6) {
// //     newArr1.push(arr[i]);
// //   }
// // }
// // console.log(newArr1);

// ////// The Call Stack and Memory Heap
// // const newMenu = [...restaurant.mainMenu, "Gnocci"];
// // const newMenu1 = newMenu;
// // newMenu1.push(1);
// // console.log(newMenu);
// // console.log(newMenu1);

// ///// Coppy array
// // const mainMenuCoppy = [...restaurant.mainMenu];

// ///// Join 2 arrays
// // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// //// Iterables: arrays, strings, pams, sets. NOT objects
// // const str = "Roman";
// // const letters = [...str, "", "S."];
// // console.log(letters);
// // console.log(...str);
// // console.log(`${...str} Babayan`); // NOT WORK

// ///// Real world example
// // const ingredients = [
// //   prompt("Let's make pasta! Ingridient 1?"),
// //   prompt("Let's make pasta! Ingridient 2?"),
// //   prompt("Let's make pasta! Ingridient 3?"),
// // ];
// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);

// /// Object
// // const newRestaurant = { foundedIn: 1999, ...restaurant, founder: "Guiseppe" };
// // console.log(newRestaurant);

// // const restaurantCopy = { ...restaurant };
// // restaurantCopy.name = "Restorante Roma";
// // console.log(restaurantCopy.name);
// // console.log(restaurant.name);

// //// SPRED, because on RIGHT side of =

// // const arr = [1, 2, ...[3, 4]];
// // console.log(arr);

// // // REST, because on LEFT side of =
// // const [a, b, ...others] = [1, 2, 3, 4];
// // console.log(a, b, others);

// // const [pizza, , risotto, ...otherFood] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];

// // console.log(pizza, risotto, otherFood);

// // //// Objects
// // const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays);

// // //// 2) Functions
// // const add = function (...numbers) {
// //   let sum = 0;
// //   for (let i = 0; i < numbers.length; i++) {
// //     sum += numbers[i];
// //   }
// //   console.log(sum);
// // };

// // add(2, 3);
// // add(5, 3, 7);
// // add(8, 3, 4, 7, 1, 3, 7, 3, 9);

// // const x = [23, 5, 6];
// // add(...x);

// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags,
// // } = restaurant;
// // console.log(restaurantName, hours, tags);

// // // Default values
// // const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);

// // // Mutating variables
// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };
// // ({ a, b } = obj);
// // console.log(a, b);

// // // Nested objects
// // const {
// //   fri: { open: o, close: c },
// // } = openingHours;

// // console.log(o, c);
// //////////////
// // Destructiromg Arrays

// // const arr = [2, 3, 4];
// // const a = [0];
// // const b = [1];
// // const c = [2];

// // const [x, y, z] = arr;

// // console.log(x, y, z);
// // console.log(arr);

// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // // Switch variables
// // // const temp = main;
// // // main = secondary;
// // // second = temp;
// // // console.log(main, secondary);

// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // //Recive 2 return values from a function

// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, main);

// // const nested = [2, 4, [5, 6]];
// // // const [i,,j] = nested
// // // console.log(i,j);

// // const [i, , [j, k]] = nested;

// // console.log(i, j, k);

// // // Defult valuse

// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r);

//=====================================================================================================
//                                               Array methods
// const people = [
//   { name: "Владилен", age: 25, budget: 40000 },
//   { name: "Елена", age: 17, budget: 3400 },
//   { name: "Игорь", age: 49, budget: 50000 },
//   { name: "Михаил", age: 15, budget: 1800 },
//   { name: "Василиса", age: 24, budget: 25000 },
//   { name: "Виктория", age: 38, budget: 2300 },
// ];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// for (const iterator of people) {
//   console.log(iterator);
// }

// //--- ForEach
// people.forEach(function (person, index, pArr) {
//   console.log(person);
//   console.log(index);
//   console.log(pArr);
// });

// // OR

// people.forEach((person) => console.log(person));

// //--- MAP
// const newPeople = people.map((person) => person);

// newPeople[0] = { name: "Roma", age: 24, budget: 10000 };
// console.log(people);
// console.log(newPeople);

// //---- Filter
// const adults = [];
// for (let i = 0; i < people.length; i++) {
//   if (people[i].age >= 19) {
//     adults.push(people[i]);
//   }
// }
// console.log(adults);

// const adults = people.filter((person) => person.age >= 18);
// console.log(adults);

// //---- Reduce
// let amount = 0;
// for (let i = 0; i < people.length; i++) {
//   amount += people[i].budget;
// }
// console.log(amount);

// const amount = people.reduce((total, person) => total + person.budget, 0);
// console.log(amount);

// //---- Find
// const igor = people.find((person) => person.name === "Игорь");
// console.log(igor);

// //---- FindIndex
// const igorIndex = people.findIndex((person) => person.name === "Игорь");
// console.log(igorIndex);

// //=========== Chain
// const amount = people
//   .filter((person) => person.budget > 30000)
//   .map((person) => {
//     return { info: `${person.name} (${person.age})`, budget: person.budget };
//   })
//   .reduce((total, person) => total + person.budget, 0);
// console.log(amount);

//========================================= CHALLANGE #1 ===============================================
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
// 1
// const [players1, players2] = game.players;
// console.log(players1);
// 2
// const [gk1, ...otherPlayers1] = game.players[0];
// const [gk2, ...otherPlayers2] = game.players[1];
// console.log(gk1, otherPlayers1);
// console.log(gk2, otherPlayers2);
// 3
// const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);
// 4
// const players1Final = [...game.players[0], "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);
// 5
// const { team1, x: drow, team2 } = game.odds;

// console.log(team1);
// console.log(drow);
// console.log(team2);
// 6
// function printGoals() {
//   console.log(
//     `${game.scored} ${Number(game.score[0]) + Number(game.score[2])}`
//   );
// }
// printGoals();

///(IN LEARNING)
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);
//6
// game.odds.team1 < game.odds.team2 && console.log(`Team1 will win`);
// game.odds.team1 > game.odds.team2 && console.log(`Team2 will win`);

//========================================= CHALLANGE #2 ===============================================
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
// // 1
// let scored = Object.entries(game.scored);
// console.log(scored);
// for (const [num, player] of scored) {
//   console.log(`Goal Number ${Number(num) + 1}, Scored ${player} `);
// }

// // 2
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// 3
// for (const [key, num] of Object.entries(game.odds)) {
//   const teamStr = key === "x" ? "drow" : game[key];
//   console.log(`Odd of victory ${teamStr}: ${num} `);
// }

// // Bonus
// let scorers = {};
// for (const players of game.scored) {
//   scorers[players] ? scorers[players]++ : (scorers[players] = 1);
//   console.log(scorers);
// }

///////////////////////////////////////

//========================================= CHALLANGE #3 ===============================================

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

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

// // 1

// const newArr = new Set();
// for (const key of gameEvents.values()) {
//   newArr.add(key);
// }

// //const events = [...new Set(gameEvents.values())];

// const events = [...newArr];
// console.log(events);
// // console.log(events);

// // 2
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3??????????
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4
// for (const [key, values] of gameEvents) {
//   key <= 45
//     ? console.log(`[FIRST HALF] ${key}: ${values}`)
//     : console.log(`[Second HALF] ${key}: ${values}`);
// }

// //for (const [min, event] of gameEvents) {
// //   const half = min <= 45 ? 'FIRST' : 'SECOND';
// //   console.log(`[${half} HALF] ${min}: ${event}`);
// // }

///////////////////////////////////////
//========================================= CHALLANGE #4 ===============================================

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
// 1

// function camelCase(name) {
//   const names = name.toLowerCase().split("_");
//   const namesUpper = [];
//   for (const n of names) {
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(" "));
// }
// camelCase("Roma_babayan");
// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const rows = text.split(" ");
//   console.log(rows);
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split("_");

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
//   }
// });

///////////////////////////////////////
// String Methods Practice

// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// for (const flight of flights.split("+")) {
//   const [type, from, to, time] = flight.split(";");

//   const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
//     "_",
//     " "
//   )} from ${from.replace(/\d/g, "").toUpperCase()} to ${to
//     .replace(/\d/g, "")
//     .toUpperCase()} (${time.replace(":", "h")})`.padStart(45);
//   console.log(output);
// }
