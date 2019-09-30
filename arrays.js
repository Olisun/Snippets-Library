// Test to check of a letter of string is included in a separate array of letters or stings. 

var letterObjArray = ['i,', 'r', 'o', '_', 'm', 'a', 'n'];
var letterGuess = 'a';
var letterTest = letterObjArray.includes(letterGuess);

console.log(letterTest); // <-- Output is true

// Random string generator from an array. Putting variable in the front (exp array) will get it to print the string as oppsed to the index.

var array = ['warriors', 'mavs', 'lakers', 'heat', 'sixers', 'sun', 'thunder', 'rockerts'];
var random = array[Math.floor(Math.random() * array.length)];
var emptyArry = [];

emptyArry.push(random); // <-- to push the random team into the empty array. 

console.log(random); // <-- Will print random team. 
console.log(emptyArry); // <-- Will print array with the random tean selected.

// Looping through an array, sorting it and pushing the output into a new array. 

var array = ['zebras', 'dogs', 'cats', 'snakes', 'bears', 'lions'];
var newArray = [];

for (var i = 0; i < array.length; i++) {
  newArray.push(array[i]);
}

newArray.sort()
console.log(newArray);

// Bootcamp. How do we print out every single student in Row 1?

var studentsRow1 = ['Christopher', 'Daniel', 'Minori', 'Victoire', 'Selena', 'Darryl', 'Greyson', 'Raghav'];

for (let i = 0; i < studentsRow1.length; i++) {
  console.log(studentsRow1[i])
}

// Accessing the letters of a word in an array. First[] is the word and second[] is the letter of that word.

const animals = ['cat', 'dog', 'snake', 'tiger', 'zebra', 'lion']
console.log(animals[0][1])

// Append array of strings to the DOM with jquery

var avengers = ['Captain America', 'Iron Man', 'Thor', 'Dr. Strange', 'Spiderman', 'Captain Marvel'];

for (var i = 0; i < avengers.length; i++) {
  $('#for-buttons').append(avengers[i] + ', ');
}

// THREE OF THE MOST USEFUL ARRAY METHODS (MEDIUM):
// The Map Method - Creates a new array with the results of a function you assign for each array item.

const numbers = [1, 2, 3, 4, 5, 6, 7];
const numbers2X = numbers.map(num => num * 2);

console.log(numbers2X);

const animals = ['dog', 'cat', 'bird'];
const animalsPlural = animals.map(a => a + `s are domestic pets.`);

console.log(animalsPlural);

// The Filter Method - Creates a new array with only the items that meet the conditions you specify with a function.

const numbers = [52, 67, 48, 51, 44, 67, 70, 44, 24];
const numbers50 = numbers.filter(num => num >= 50);

console.log(numbers50);

const animals = ['dog', 'cat', 'bird'];
const animals4 = animals.filter(a => a.length > 3);

console.log(animals4); // output is bird.

// The Reduce Method - Good to find sum of numnbers in an array. Takes two arguments (accumulator and current item). The accumulator will add all the values and the current item will be indexed at 0 then added to the reduced accumulator. SEE FURTHER BELOW FOR SUM OF NUMS AND AVG OF NUMS FUNCTION.

const numbers = [52, 67, 48, 51, 44, 67, 70, 44, 24];
const numbersSum = numbers.reduce((accum, item) => accum + item);
const numbersSum2 = numbers.reduce((accum, item) => accum + item, 1000);

console.log(numbersSum); // output is 467
console.log(numbersSum2); // output is 1467

const animals = ['dog', 'cat', 'bird'];
const animalsSum = animals.reduce((accum, item) => accum + item);

console.log(animalsSum); // output is dogcatbird (same as concat)


// OTHER ARRAY METHODS:
// Sort Method - sorts alphabetically because it views data as strings.

const animals = ['cat', 'dog', 'snake', 'tiger', 'zebra', 'lion']
animals.sort();

console.log(animals); // <-- output cat", "dog", "lion", "snake", "tiger", "zebra"

// Sort Method reverse.

const animals = ['cat', 'dog', 'snake', 'tiger', 'zebra', 'lion']
animals.sort();
animals.reverse(); // <-- call reverse after calling sort.

console.log(animals); // <-- output zebra", "tiger", "snake", "lion", "dog", "cat

// Sort Method for numbers - need this function part. 

const numbers = [11, 15, 24, 5, 3, 9, 109, 56, 26, 37]
numbers.sort((a, b) => {
  return a - b; // <-- to reverse, b - a
});

console.log(numbers); // <-- output 3, 5, 9, 11, 15, 24, 26, 37, 56, 109
console.log(numbers[0]); // <-- output is highest number in the array (return b - a)
console.log(numbers[0]); // <-- output is lowest number in the array (return a - b)

// Access items in an array.  Array count starts at 0.

let toDoList = [
  'dog food',
  'cat food',
  'go for a run',
  'jogurt'
];

console.log(toDoList[3]);

// This will return the number of items including the items pushed to the end.  Works with .unshift too.

console.log(toDoList.push('one', 'two', 'three'));

// This will print all the items including the new added at the end to the console.

toDoList.push('one', 'two', 'three');
console.log(toDoList);

// This will add the new items to the front of the array.

toDoList.unshift('one', 'two', 'three');
console.log(toDoList);

// The .unshift method will remove an item from the from of the array.

let toDoList = [
  'one',
  'two',
  'three',
  'four'
];

toDoList.shift();

console.log(toDoList)

// This removes items from the end of an array.  'three' and 'four' in the example below

let toDoList = [
  'one',
  'two',
  'three',
  'four'
];
toDoList.pop();
toDoList.pop();

// Another example of the pop methed for removing Array items.  You can also display the item popped

const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker);
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2. Can also just console.log(newItemTracker.pop));

// To change an element in an Array or add it to the end. Exaple below will change 'milk' to 'avocados'.

let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[3] = 'avocados';

console.log(groceryList);

// Array.shift method removes the first element.

var array1 = [1, 2, 3];

var firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

// Another Aray.shift example.

const groceryList = [
  'orange juice',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains'
];

groceryList.shift();

console.log(groceryList);

// Array unshft method adds one or more elements to the beginning of an array and returns the new length of the array.

var array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

// Array.slice method removes specified items from an Array. 1st number is the 1st element. last number is the remaining element - the elements after will be removed.  

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

// This .slice example removes the first item and the Array ends with the 4th element

const groceryList = [
  'orange juice',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains'
];

console.log(groceryList.slice(1, 4));

// Array method.indexOf will let you know where the array item is listed.  i.e. it's index value from 0

let secretMessage = [
  'Learning',
  'is',
  'not',
  'about',
  'what',
];

console.log(secretMessage.indexOf('about'));

// Determing how many items in an Array (remeber Arrays are 0 index).

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

// Array .join method combines elements in an Array.

var elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(' '));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"


// Example of a nested Array and access the elements inside the Array

const numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6]
];
const target = numberClusters[2][1];
console.log(target) // output is 6 because you are calling the 2 (indexed to 0) item in the main array and the 1 index of the sub Array.

// To deterime if an Array contains a specifc element(s)

const arrayExample = [5, 7, 33, 'this', 'that', 55, 175, 'Wig175'];
console.log(arrayExample.includes('that')); // returns true

// ITERATORS
// iterator .forEach() - will execute the same code for each element of an array. Each item will list on a separate line

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

function printFruits(element) {
  console.log('I want to eat a ' + element);
}; // output is 'I want to eat a mango'....then next line is papaya...

fruits.forEach(printFruits)

// iterator .findIndex() - will return the index of the FIRST element that evaluates to true in the callback function.

const jumbledNums = [25, 78, 5, 111, 9, 66, 43, 145, 12, 8];
const myNums = jumbledNums.findIndex(iMadeUpThis);

function iMadeUpThis(numnum) {
  return numnum > 100;
};

console.log(myNums); // returns 3 which is the index of 111
console.log(jumbledNums[3]); // returns 111

// .findIndex() example with strings

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(dubs);

function dubs(myParameter) {
  return myParameter === 'elephant';
};
console.log(foundAnimal);
console.log(animals[7]);

// .charAt() - returns the first character of any string (must index[]) in an array.

const animals = ['hippo', 'tiger', 'lion', 'seal'];

const starts = animals[0].charAt(0);
console.log(starts) // returns h

// .reduce() Method (GOOD FOR DETERMINING SUM OF NUMBERS IN AN ARRAY). Returns a single value after iterating through the elements of an array. Accumulator adds the first two numbers, then adds the third number to the sum of the first two and the loop continues.

const numbers = [1, 2, 4, 10, 12, 45, 5, 143];
const sumOfNums = numbers.reduce(myFunction); // you can add a 2nd argument to numbers.reduce(). Like 10 will add 10 to the sum.

function myFunction(accumulator, currentValue) { // accumulator & currentValue can be anything but it's best to be descriptive.
  return accumulator + currentValue
};

console.log(sumOfNums);

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

// .split() method splits a string of words into a new array. No space btw the '' will produce an array of all the letters. One space btw the '' will produce an array of all the words.

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey.'

let storyWords = story.split(' '); //  ' ' for words.
console.log(storyWords); //  Output is new array with the words as individual items.
console.log(storyWords.length); // Output is 188 representing 188 items on the array.



// Nested Array example.  This code is great for comparing 2 separate arrays. Output is 'Both loops have the number' 2X with their numbers.

const myArray = [6, 19, 20, 55];
const yourArray = [19, 55, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  } // Note - either myArray or yourArray works in console.log
};

// Another nested Array example where you find the common elements and push them to a new array.

const bobsFollowers = ['Steve', 'John', 'Andy', 'James'];
const tinasFollowers = ['Steve', 'Jeff', 'Andy', ];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i = i + 1) {
  for (let j = 0; j < tinasFollowers.length; j = j + 1) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
      console.log(mutualFollowers);
    };
  };
};

// For loop program comparing letters from a string to letters from an array and pushing common letters into a new array.

const input = 'Jogging Time!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i = i + 1) {
  for (let j = 0; j < vowels.length; j = j + 1) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    };
    if (input[i] === 'e') {
      resultArray.push(input[i]);
    };
    if (vowels[j] === 'u') {
      resultArray.push(vowels[j]);
    };
  };
};

console.log(resultArray);
console.log(resultArray.join('').toLocaleUpperCase());

// Assinging a function for each item of an Array (USEFUL IN DOM!)

const arrayItems = ['div1', 'div2', 'div3', 'div4', 'div5', 'div6', 'div7', 'div8', 'div9'];
const singleItem = [];
arrayItems.forEach((thingy) => {
  singleItem.push(document.getElementById(thingy));
})

const testFunction = (event) => {
  event.target.innerHTML = 'THIS WORKS!';
};

const eventAssignment = (thingy) => {
  thingy.onclick = () => {
    testFunction(event)
  };
};

singleItem.forEach(eventAssignment);


// MOSH - Array from range

const numbers = [1, 2, 3, 4];

console.log(includes(numbers, -1));

function includes(array, searchElement) {
  for (let element of array)
    if (element === searchElement)
      return true;
  return false;
}

// MOSH - Array includes

const numbers = [1, 2, 3, 4];

console.log(includes(numbers, -1));

function includes(array, searchElement) {
  for (let element of array)
    if (element === searchElement)
      return true;
  return false;
}

// MOSH - Array except

const numbers = [1, 2, 3, 4];

const output = except(numbers, [1, 2]);

console.log(output);

function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element))
      output.push(element);
  return output;
}

// MOSH - Array moves

const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 3);

console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error('Invalid offset.');
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}

// MOSH - Array count occurances

const numbers = [1, 2, 3, 4];

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement) {
  // let count = 0; 
  // for (let element of array)
  //   if (element === searchElement)
  //     count++;
  // return count;

  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}

// MOSH - Array max numbers

const numbers = [1, 2, 3, 4];

const max = getMax([]);

console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;

  // let max = array[0];

  // for (let i = 1; i < array.length; i++)
  //   if (array[i] > max)
  //     max = array[i];

  // return max; 

  return array.reduce((a, b) => (a > b) ? a : b);
}