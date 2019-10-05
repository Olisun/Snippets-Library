// Loops: Adding new stuff
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

// Bootcamp - using for loop to print out this list to the console as spearate strings

var files = [
  "ashers_first_birthday.mov",
  "derek_asleep_at_the_computer.jpg",
  "joanne_fights_a_polar_bear.mp4",
  "jimmy_road_rage.avi",
  "raghav_skydiving.jpeg",
  "magha_getting_his_black_belt.png",
  "farley_winning_underground_street_race.mov",
  "its_hard_to_come_up_with_file_names.gif",
  "seriously_this_is_taking_too_long.mpg",
  "i_wonder_how_many_of_these_i_should_have.png",
  "probably_a_few_more.avi",
  "nutmeg_is_clawing_my_sneakers_again.mp4",
  "cat_i_will_destroy_you.gif",
  "i_wish_we_had_a_dog.jpeg",
  "stop_looking_at_me_like_that_nutmeg.mpeg",
  "aww_i_cant_hate_you.png",
  "omg_my_sneakers.avi",
  "cat_you_are_the_worst.mp4"
];

for (let i = 0; i < files.length; i++) {
  console.log(files[i])
}

// Append array of strings to the DOM with jquery and for loop

var avengers = ['Captain America', 'Iron Man', 'Thor', 'Dr. Strange', 'Spiderman', 'Captain Marvel'];

for (var i = 0; i < avengers.length; i++) {
  $('#for-buttons').append(avengers[i] + ', ');
}

// Modulo for loop checking numbers evenly divided by. If the different numbers can be divided amounts each other (i.e. 5 and 10, there will be issues)

for (let i = 0; i < 100; i++) {
  if (i % 5 === 0) {
    console.log(`Number divisible by 5: ${i}`)
  } else if (i % 7 === 0) {
    console.log(`Number divisible by 7: ${i}`)
  }
}

// Loops:
// while loop - used for looping until a condition is satisfied and when it is unsure how many times the code should be in loop
// for loop - used for looping until a condition is satisfied but it is used when you know how many times the code needs to be in loop
// do while loop - executes the content of the loop once before checking the condition of the while.
// While Loop - Will keep repeating itself until a condition is met.
//  exp: Prints Wiggly 10X

let x = 0;
while (x < 10) {
  x = x + 1;
  console.log('Wiggly');
};

// exp: w/o break, prints 1, 2, 3, ......... 10.  w/break, stops at 5

let x = 0;
while (x < 10) {
  x = x + 1;
  console.log(x)
  if (x >= 5) {
    break;
  };
};

// While loop card game.  NEED TO FURTHER UNDERSTAND THIS!

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard = 0
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// The difference btw Do-While and While is that the do while loop executes at least once because it checks for the loop condition while exiting. While is a entry controlled loop and do while is a exit control loop. Whereas in do while loop it will enter the loop and will then check for the condition.

// Do While Loop
// exp: x is outside the condition but the loop still exeutes once. Output is 21.

let x = 20;
do {
  x = x + 1;
  console.log(x);
} while (x < 10);

// For Loop - Used to run a loop a given number of times.
// Simple loop to print "1 little wiggly, 2 little wiggly....."

for (let index = 1; index <= 10; index++) {
  console.log(`${index} little wiggly`);
};

// exp: w/o break, prints 0, 1, 2, 3, ......... 10.  w/break, stops at 5

for (let x = 0; x < 11; x = x + 1) {
  console.log(x);
  if (x >= 5) {
    break;
  };
};

// For Loop can do reverse calcs too.  Here's an example.

for (let number = 100; number > 50; number = number - 5) {
  console.log(number);
};

// Looping through an array using a for loop.

const doggies = ['Wiggly', 'Lucy', 'Remi'];
for (let i = 0; i < doggies.length; i = i + 1) {
  console.log(doggies[i]);
};

// Using a for loop to iterate through a string. Output is listing each letter separately via index position.

const input = 'Jogging Time!';

for (let i = 0; i < input.length; i = i + 1) {
  console.log(input[i]);

  // Another for loop example. Output is Lil' Kim, Jay-Z, Notorious B.I.G., Tupac

  const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

  for (let i = 0; i < rapperArray.length; i = i + 1)
    console.log(rapperArray[i]);

  // This breaks the loop at Notorious B.

  for (let i = 0; i < rapperArray.length; i = i + 1) {
    console.log(rapperArray[i]);

    if (rapperArray[i] === "Notorious B.I.G.") {
      break;
    };
  };

  console.log("And if you don't know, now you know.")

  // For-in Loops (loops through an object).

  const futueDev = {
    name: 'Oliver Sun',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
  }

  for (x in futueDev) {
    console.log(x) // <-- output are the keys
  }

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