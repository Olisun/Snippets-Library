// Function which takes an array, sorts it and pushes the sorted items into a new array. 

var array = ['zebras', 'dogs', 'cats', 'snakes', 'bears', 'lions'];
var newArray = [];

function arrayPractice() {
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  newArray.sort()
  console.log(newArray);
};

arrayPractice();

// Function for taking any number of arguments and pushing them into an array, then sorting that array. Using the Spread Operator. Works for strings only.

function test(...param) {
  paramArray = [];
  paramArray.push(...param);
  paramArray.sort();
  console.log(paramArray);
};

test('cat', 'zebra', 'dog', 'elephants', 'bears', 'wigglys');

// Funtions that takes in a bunch of numbers as arguments, puts them in an array, then sorts that array. This works for numbers.

function numberSort(...nums) {
  var numsArray = [];
  numsArray.push(...nums);
  var sortedNumbers = numsArray.sort(function(a, b) {
    return a - b
  });
  console.log(sortedNumbers);
};

numberSort(55, 67, 145, 2, 74, 81, 1, 46, 6, 13);

// Funciton that takes an array of numbers as an argument and then adding the sum of the array using the Spread Operator.

function addNumbers(...numbers) {
  var total = 0;
  for (var number of numbers) total += number;
  return total;
};

addNumbers(4, 16, 24, 44, 21, 6, 713, 67, 100);

// Finding length of arguments passed into a function. Spread operator forms an array.  

function calculateSum(...arguments) {
  console.log(arguments.length)
}

calculateSum(3, 3, 3, 3, 3, 5, 5, 4, 5, 4, 4) // ==> 10

// Funding the sum of an array passed into a function as an argument. 

function calculateSum(...arguments) {
  let accumulator = 0;
  for (let i = 0; i < arguments.length; i++) {
    accumulator += arguments[i];
  };
  return accumulator;
};

// Funding the average of an array passed into a function as an argument. 

calculateSum(3, 3, 3, 3, 3, 5, 5, 4, 5, 4, 4) // ==> 42

function calculateAverage(...arguments) {
  let accumulator = 0;
  for (let i = 0; i < arguments.length; i++) {
    accumulator += arguments[i];
  };
  return accumulator / arguments.length;
};

// Setting dynamic time using moment.js and setInteral (See Train HW for details). 

var currentTimeDOM = $('#current-time-dom');

var dynamicTime = function() {
  var currentTime = moment();
  var currentTimeFormatted = moment(currentTime).format('HH:mm:ss');
  currentTimeDOM.text(currentTimeFormatted);
}
setInterval(dynamicTime, 1000);
currentTimeDOM.text(dynamicTime);

// Example function to pick the highest number

function maxNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  };
}
console.log(maxNumber(11, 55));

// Random number generator.  Last number is the top end. Need to add 1 because Math.random only goes from 0-1 but not including 1.

const random = Math.floor(Math.random() * 100) + 1;

// Random Number generator (btw min and max)

var guess = Math.floor(Math.random() * (max - min + 1) + min);

// Random string generator. Putting variable in the front (exp array) will get it to print the string as oppsed to the index.

var array = ['warriors', 'mavs', 'lakers', 'heat', 'sixers', 'sun', 'thunder', 'rockerts'];
var random = array[Math.floor(Math.random() * array.length)];
var emptyArry = [];

emptyArry.push(random); // <-- to push the random team into the empty array. 

console.log(random); // <-- Will print random team. 
console.log(emptyArry); // <-- Will print array with the random tean selected.

// Prompting a random number and returning an integer using Math.floor & Math.random properties

let question = prompt('Pick a number between 1 and 20.');
question = parseInt(question);
document.write(Math.floor(question));

let number = Math.floor(Math.random() * 10) + 1;
alert('Your random number is ' + number);

// Same as above but as a function where you enter the RN on the console.

function randomNumber() {
  let question = '25'
  question = parseInt(question);
  console.log(Math.floor(question));

  let number = Math.floor(Math.random() * question) + 1;
  console.log('Your random number is ' + number);
};
randomNumber();

// Random number function.

function randomNumber(a) {
  let number = Math.floor(Math.random() * a) + 1;
  console.log('Your random number is ' + number);
};
randomNumber(45);

// Function for determining the average of numbers in an array.

const testScores = [88, 95, 97, 96, 99, 78, 95];
const scoresSum = testScores.reduce(myFunction);
const averageScore = scoresSum / testScores.length;

function myFunction(accum, cv) {
  return accum + cv;
};

console.log(testScores.length);
console.log(scoresSum);
console.log('The average test score is: ' + averageScore);

// Training days program.

const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

const getTrainingDays = () => {
  let event = getRandEvent();
  if (event === 'Marathon') {
    return 50;
  } else if (event === 'Triathlon') {
    return 100;
  } else if (event === 'Pentathlon') {
    return 200;
  }
};

const logEvent = () => {
  const name = 'Nala';
  console.log(`${name}'s event is: ` + getRandEvent());
};

const logTime = () => {
  const name = 'Nala';
  console.log(`${name}'s time to train is: ` + getTrainingDays() + ' days.');
};

logEvent();
logTime();

// function showing the various variable scopes.

function logVisibleLightWaves() {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();

// Function with a default parameter ('stranger')

function greeting(name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

// Function for converting celius to fahrenheit

function celciusToFahrenheit(celcius) {
  return celcius * (9 / 5) + 32;
}

console.log(celciusToFahrenheit(8));

// Another way to assign a function to a variable but call the variable to call the function.

function testCase() {
  console.log('test case');
};

const test = testCase;

test();

// Passing one function as the argument for another function.

function testCase() {
  return 2 + 2;
};

function testCase2(number) {
  return 2 + 4 + number;
};

console.log(testCase2(testCase()));

// Callback function example.  Declaring 2 separate functions with one function being in the parameter () of another function.

function practice(word, funct) {
  console.log(word);
  funct();
};

function practice2() {
  console.log('World');
};

practice('Hello', practice2);

// Callback function examples. Declaring a function in another function's parameter and calling it in the argument of the callback.

function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework.`);
  callback(); // allows the 'callback' parameter to be called back as a function
}

doHomework('math', function() {
  console.log('Finished my homework');
});

function whatsForDinner(options, ate) {
  console.log(options);
  ate(); // allows the 'callback' parameter to be called back as a function
}

whatsForDinner('KFC', function ate() {
  console.log('is what I ate for dinner');
});

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

// Another example with Constructor functions. Function name must start with a CAP!

function Person(firstName, lastName) { // <-- name of function starts with a capital and can't use arrow function.
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = () => {
    console.log(`My name is ${this.firstName} ${this.lastName}`)
  }
}
const me = new Person('Oliver', 'Sun');
me.fullName();

// Card Deck Function (Draw and Shuffle - From Boot Camp)

function Card(value) {
  if (value >= 1 && value <= 13) {
    this.value = value;
  } else {
    this.value = 1;
  }
  this.print = function() {
    // This is a ternary statement and has the syntax of
    // <conditional> ? <value if true> : <value if false>
    var printValue = this.value < 10 ? "0" + this.value : this.value;
    console.log(`
    -----------
    |${printValue}       |
    |         |
    |         |
    |         |
    |         |
    |       ${printValue}|
    -----------
    `)
  }
}

// --------------------- End Code Area --------------------



// Defining the deck constructor function
//
// -------------------- Your Code Here --------------------

function Deck(cards = []) {
  this.cards = cards;
  this.count = function() {
    return this.cards.length;
  }
  this.shuffle = function() {
    for (var i = this.cards.length - 1; i >= 0; i--) {
      var randIndex = Math.floor(Math.random() * (i + 1));
      var tempCard = this.cards[i];
      this.cards[i] = this.cards[randIndex];
      this.cards[randIndex] = tempCard;
    }
  }
  this.draw = function() {
    return this.cards.pop();
  }
  this.add = function(card) {
    this.cards.push(card);
    this.shuffle();
  }
}

// MOSH - Sum of arguments

console.log(sum([1, 2, 3, 4]));

function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0]))
    items = [...items];

  return items.reduce((a, b) => a + b);
}

// MOSH - Area of circle

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};

console.log(circle.area);

// MOSH - Error handling

try {
  const numbers = [1, 2, 3, 4];
  const count = countOccurrences(null, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array))
    throw new Error('Invalid array.');

  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}