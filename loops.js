// Bootcamp. How do we print out every single student in Row 1?

var studentsRow1 = ['Christopher', 'Daniel', 'Minori', 'Victoire', 'Selena', 'Darryl', 'Greyson', 'Raghav'];

for (let i = 0; i < studentsRow1.length; i++) {
  console.log(studentsRow1[i])
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