// How to filter objects in array in JavaScript. 

const friends = [
  { name: "Abby", age: 22 },
  { name: "Boby", age: 16 },
  { name: "Coel", age: 20 },
  { name: "Dany", age: 15 }
];

friends.filter(friend => friend.age >= 18);

// returns
// [
//     { name: 'Abby', age: 22 },
//     { name: 'Coel', age: 20 },
// ]

// Looping through an object to get the values with Object.values. 

const repository = {
  id: 1,
  language: "javascript",
  public: true
};

for (const value of Object.values(repository)) {
  console.log(value); // -- output are the values (as opp[sed to the keys). 
}

// Bootcamp - Parsing Objects

var customer = {
  firstName: "John",
  lastName: "Smith",
  age: 25,
  address: {
    streetAddress: "21 2nd Street",
    city: "New York",
    state: "NY",
    postalCode: "10021"
  },
  phoneNumber: [{
    type: "home",
    number: "212 555-1234"
  }, {
    type: "fax",
    number: "646 555-4567"
  }]
};

// Step 1: Log the First Name below using console.log
console.log(customer.firstName)
  // Step 2: Log the Last Name below using console.log
console.log(customer.lastName)
  // Step 3: Log the State of the Address below using console.log
console.log(customer.address.state)
  // Step 4: Log the Home Phone Number below using console.log
console.log(customer.phoneNumber[0].number)
  // Step 5: Log the Fax Number below using console.log
console.log(customer.phoneNumber[0].number)

// Example of .this in an object. 

const animal = {
  type: 'dog',
  breed: 'labrador retreiver',
  kind: 'wiggly',
  age: 9,
  fullAnimal: function() { // <-- No Arrow Function here sicne it's an object
    console.log(`I have a ${this.type} and she's a ${this.breed}. She's a ${this.kind} and she's ${this.age}`);
  },
}

animal.fullAnimal();

// Person object with a built-in function.

const person = {
  Name: 'Oliver Sun',
  Age: 47,
  Favorite_Animal: 'Wiggly',
  Greeting: function() {
    console.log('My name is ' + person.Name + ' and my favorite animal is ' + person.Favorite_Animal)
  },
};

person.Greeting();

// Using a For In Loop to iterate through a complex object.

let spaceship = {
  crew: {
    captain: {
      name: 'Lily',
      degree: 'Computer Engineering',
      cheerTeam() { console.log('You got this!') }
    },
    'chief officer': {
      name: 'Dan',
      degree: 'Aerospace Engineering',
      agree() { console.log('I agree, captain!') }
    },
    medic: {
      name: 'Clementine',
      degree: 'Physics',
      announce() { console.log(`Jets on!`) }
    },
    translator: {
      name: 'Shauna',
      degree: 'Conservation Science',
      powerFuel() { console.log('The tank is full!') }
    }
  }
};

for (let crewMemmber in spaceship) {
  console.log(crewMemmber, spaceship[crewMemmber]);
};
for (let crewMemmber in spaceship.crew['chief officer']) {
  console.log(crewMemmber, spaceship.crew['chief officer'][crewMemmber]);
};
// This will output the entire object. Use dot notation in spaceship to output specific properties like 'chief officer'. Also can use Object.entries method but that will return the object as an array

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};
// output is:
// captain: Lily
// chief officer: Dan
// medic: Clementine
// translator: Shauna

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name} ${spaceship.crew[crewMember].degree}`)
};
// output is:
// captain: Lily Computer Engineering
// chief officer: Dan Engineering
// medic: Clementine Physics
// translator: Shauna Science

// To call each function.
spaceship.crew.captain.cheerTeam();

// To output a value and associate with another value. Notice the first value ends with ':' then the second value.

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};
// Output is:
// Lily: Computer Engineering
// Dan: Aerospace Engineering
// Clementine: Physics
// Shauna: Conservation Science

// Note these two ways output the same result.

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember} ${spaceship.crew[crewMember].name} ${spaceship.crew[crewMember].degree}`);
  console.log(crewMember + ' ' + spaceship.crew.captain.name + ' ' + spaceship.crew.captain.degree);
};

// ADVANCED OBJECTS:
// Calling a function within an object that calls on another property within the same object. Use .this

let dog = {
  name: 'Wiggly',
  action: 'wiggly her tail',
  makeSound() {
    console.log('bark bark');
  },
  doAction() {
    console.log(this.action);
  },
};

dog.doAction();

// Another example of calling a function within an object that calls on another property within the same object.

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    console.log('I am ' + this.model + 'and my current energy level is ' + this.energyLevel);
    console.log(`I am ${this.model} and my current energy level is ${this.energyLevel}.`); // Another way to write.
  },
};

robot.provideInfo();

// An underscore before a property means it's private and it's not meant to be altered.  You still can however.

const robot = {
  _energyLevel: 100, // <---
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
robot._energyLevel = 'high';
console.log(robot._energyLevel);

// Getters are used to access multible propeties. Use if else in the function code.

const animal = {
  type: 'doggie',
  breed: 'Labrador Retreiver',
  kind: 'Wiggly',
  get breedKind() { // Getter's have no value inside the ()
    if (this.type && this.breed && this.kind) {
      return `I have a ${this.type} and she's a ${this.breed} aka a ${this.kind}!!`
    } else {
      return 'not working!'
    }
  }
};

console.log(animal.breedKind); // when calling, don't use ()

// Another getter example w/o if else.

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    return this._numOfSensors;
  },
  get energyLevel() {
    return this._energyLevel;
  },
};

console.log(robot.numOfSensors);
console.log(robot.energyLevel);

// Setters reassign values of existing properties within an object.

const animal = {
  type: 'doggie',
  breed: 'Labrador Retreiver',
  kind: 'Wiggly',
  age: 9,
  set newAge(value) {
    this.age = value;
  },
  set newBreed(someWord) {
    this.breed = someWord;
  },
};

animal.newAge = 10; // when calling, don't use ()
console.log(animal.age) // Output is 10. Notice call must be original key and not the method name like a getter

animal.newBreed = 'Doberman Pincher'; // when calling, don't use ()
console.log(animal.breed); // Output is 10. Notice call must be original key and not the method name like a getter.

const animal = {
  type: 'doggie',
  breed: 'Labrador Retreiver',
  kind: 'Wiggly',
  age: 9,
  set newAge(value) { // setters must have one value in the parameter.
    this.age = value;
  },
  set newBreed(someWord) {
    this.breed = someWord;
  },
};

animal.newAge = 10;
console.log(animal.age)

animal.newBreed = 'Doberman Pincher';
console.log(animal.breed);

// Another setter example

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === 'number') {
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) { // pass num for the parameters in the if function
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    };
  },
};

robot.numOfSensors = 35;
console.log(robot._numOfSensors);

// Factory Functions

function myFactoryFunction(type, breed, subBreed, forTheInnerFunction) {
  return {
    type: type, // ES6 allows us to remove the key. Just 'type,' OK
    breed: breed, // ES6 OK to just type 'breed,'
    subBreed: subBreed, // Same
    action() {
      console.log(`I have a ${forTheInnerFunction}`); // Both works
      console.log('I have a ' + forTheInnerFunction); // Both works
    }
  }
}

// Factory Functions return the object
const testThis = myFactoryFunction('Doggie', 'Lab', 'Wiggly', 'Wiggly');
testThis.action(); // To call the function inside use the variable you assigned.
console.log(myFactoryFunction('Doggie', 'Lab', 'Wiggly', 'Wiggly')); // returns the object

// Constructor Functions - also used to create an object.  Notice the use of '.this' and 'new'

function CreateDog(type, breed) {
  this.type = type;
  this.breed = breed;
  this.action = function() {
    console.log('Bark')
  }
};

const newDog = new CreateDog('Wiggly', 'Lab');
console.log(newDog);
console.log(newDog.action());

// Destructured Assignment - Neat way to grab properties from an object other than assigning a variable to the object.property

const animal = {
  type: 'doggie',
  breed: 'Labrador Retreiver',
  kind: 'Wiggly',
  age: 9,
  preferences: {
    game: 'ball ball playtime',
    food: 'anything',
  },
  act: {
    action() {
      console.log('ruff-ruff');
    }
  }
};

const { breed } = animal; // The prop key goes inside {}
console.log(breed);

const { preferences } = animal;
console.log(preferences);

const { game } = animal.preferences; // Nested objects need the {}
console.log(game)

const { act } = animal; // for abstracting the method.  Notice method needs to have a key property.
act.action();
console.log(act);

// Built-in Object method (Object.keys). returns an array of a given object's own property names, in the same order as we get with a normal loop.

const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

console.log(Object.keys(robot)); // output is an array of just the keys

// Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well). The order of the array returned by Object.entries() does not depend on how an object is defined. If there is a need for certain ordering then the array should be sorted first like Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));.

const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotEntries = Object.entries(robot);
console.log(robotEntries); // Output is both prop and value keys in an their own arrays.

// Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object. Note that if the two objects have the same key, that won't be copied.

const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// Declared a const variable named newRobot and combined newRobot's properties {laserBlaster: true, voiceRecognition: true} from robot.

const newRobot = Object.assign(robot, { laserBlaster: true, voiceRecognition: true });
console.log(newRobot); // robot's propertis are listed first in the new array.

const newRobot2 = Object.assign({ laserBlaster: true, voiceRecognition: true }, robot);
console.log(newRobot2); // newRobot's properties are listed first in the new array.

// Using Object.assign to copy 2 objects together

const canEat = {
  eat() {
    console.log('eat');
  },
};

const canWalk = {
  walk() {
    console.log('walk');
  },
};

const person = Object.assign({}, canEat, canWalk);
console.log(person);

// Random Meal Generator Program

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizersIn) {
    this._courses = appetizersIn;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainsIn) {
    this._courses = mainsIn;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertsIn) {
    this._courses = dessertsIn;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}.`;
  },
};

// Hoops player and game geenerator program

const team = {
  _players: [
    { firstName: 'Steph', lastName: 'Curry', age: 30 },
    { firstName: 'Kevin', lastName: 'Durant', age: 31 },
    { firstName: 'Klay', lastName: 'Thompson', age: 29 },
  ],
  _games: [
    { opponent: 'Rockets', teamPoints: 100, opponentPoints: 92 },
    { opponent: 'Raptors', teamPoints: 108, opponentPoints: 100 },
    { opponent: 'Lakers', teamPoints: 120, opponentPoints: 101 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this.games.push(game);
  }
};

team.addPlayer('Draymond', 'Green', 29); // adds new items to the _players array.
team.addGame('Trail Blazers', 118, 94); // adds new items to the _games array.
console.log(team);

// MOSH 

// The simplest way to create an object is using an object literal 
const circle = {
  radius: 1,
  draw: function() {}
};

// To create multiple objects with the same structure and behaviuor (methods), use a factory or a constructor. 

// Factory function 
function createCircle(radius) {
  return {
    radius,
    draw: function() {}
  }
}

// Constructor function 
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {}
}

// Every object has a "constructor" property which returns the function that was used to construct or create that object. 
const x = {};
x.constructor; // returns Object() 

// In JavaScript, functions are objects. They have properties and methods. 
Circle.name;
Circle.length;
Circle.constructor; // returns Function()
Circle.call({}, 1); // to call the Circle function 
Circle.apply({}, [1]);

// Value types are copied by their value, reference types are copied by their reference. 
// Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
// Reference types are: Object, Function and Array 

// JavaScript objects are dynamic. You can add/remove properties: 
circle.location = {};
circle['location'] = {};

delete circle.location;

// To enumerate the members in an object: 
for (let key in circle) console.log(key, circle[key]);

Object.keys(circle);

// To see if an object has a given property
if ('location' in circle)

// Abstraction means hiding the complexity/details and showing only the essentials. 
// We can hide the details by using private members. Replace "this" with "let". 

function Circle(radius) {
  // Public member 
  this.radius = radius;

  // Private member                       
  let defaultLocation = {};
}

// To define a getter/setter, use Object.defineProperty():

Object.defineProperty(this, 'defaultLocation', {
  get: function() { return defaultLocation; },
  set: function(value) { defaultLocation = value; }
});

// Use mixins to combine multiple objects 
// and implement composition in JavaScript. 
const canEat = {
  eat: function() {}
};

const canWalk = {
  walk: function() {}
};

function mixin(target, ...sources) {
  // Copies all the properties from all the source objects 
  // to the target object. 
  Object.assign(target, ...sources);
}

function Person() {}

mixin(Person.prototype, canEat, canWalk);
// From Mosh - Prototypes:

// Every object (except the root object) has a prototype (parent). 
// To get the prototype of an object:
Object.getPrototypeOf(obj);

// In Chrome, you can inspect "__proto__" property. But you should 
// not use that in the code. 

// To get the attributes of a property:
Object.getOwnPropertyDescriptor(obj, 'propertyName');

// To set the attributes for a property:
Object.defineProperty(obj, 'propertyName', {
  configurable: false, // cannot be deleted
  writable: false,
  enumerable: false
});

// Constructors have a "prototype" property. It returns the object 
// that will be used as the prototype for objects created by the constructor. 
Object.prototype === Object.getPrototypeOf({})
Array.prototype === Object.getPrototypeOf([])

// All objects created with the same constructor will have the same prototype. 
// A single instance of this prototype will be stored in the memory. 
const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true 

// Any changes to the prototype will be immediately visible to all objects 
// referencing this prototype. 

// When dealing with large number of objects, it's better to put their
// methods on their prototype. This way, a single instance of the methods
// will be in the memory. 
Circle.prototype.draw = function() {}

// To get the own/instance properties:
Object.keys(obj);

// To get all the properties (own + prototype): 
for (let key in obj) {}