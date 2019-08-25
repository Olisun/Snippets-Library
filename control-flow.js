// Math Quiz

let score = 0;

let mathQuestion1 = prompt('What is 2 + 2?');
if (mathQuestion1 === '4') {
  score = score + 1;
  alert('Correct');
} else {
  alert('Wrong');
};

let mathQuestion2 = prompt('What is 4 / 2?');
if (mathQuestion2 === '2') {
  score = score + 1;
  alert('Correct');
} else {
  alert('Wrong');
};

let mathQuestion3 = prompt('What is 4 * 2?');
if (mathQuestion3 === '8') {
  score = score + 1;
  alert('Correct');
} else {
  alert('Wrong');
};

if (score === 3) {
  document.write('You passed! Your final score is ' + score);
} else {
  document.write('You did not pass! Your final score is ' + score);
}

// Rock, Paper, Scissors Game (need to figure out how to pass your throw to the playGame())

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
    return userInput;
  } else {
    console.log('Error!');
  };
};

function getComputerChoice() {
  const getComputerChoice = Math.floor(Math.random() * 3);

  if (getComputerChoice === 0) {
    return 'rock';
  } else if (getComputerChoice === 1) {
    return 'paper';
  } else if (getComputerChoice === 2) {
    return 'scissors';
  };
}

function determineWinner(userChoice, computerChoice) {

  if (userChoice === computerChoice) {
    return 'tie';
  };

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  };

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  };

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  };
}

function playGame() {
  userChoice = getUserChoice('Rock');
  computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

// function calculating time it takes to become an expert (at javaScript).

function practiveHours(hours, daysPerWeek) {
  return hours * daysPerWeek;
};

function numberOfWeeks() {
  const hoursPerWeek = practiveHours(4, 6);
  const numberOfHours = 10000;
  return numberOfHours / hoursPerWeek;
};

function howLongExpert() {
  const oneYear = 365;
  return numberOfWeeks() / oneYear;
};

function answer() {
  return 'It will take you ' + howLongExpert() + ' years' +
    ' studying 4 hours a day and 6 days a week.'

  // function Sleep Debt Calculator

  function getSleepHours(day) {
    if (day === 'Monday') {
      return 7;
    } else if (day === 'Tuesday') {
      return 8;
    } else if (day === 'Wednesday') {
      return 6;
    } else if (day === 'Thursday') {
      return 5;
    } else if (day === 'Friday') {
      return 4;
    } else if (day === 'Saturday') {
      return 7;
    } else if (day === 'Sunday') {
      return 7;
    };
  };

  function getActualSleepHours() {
    return getSleepHours('Monday') + getSleepHours('Tuesday') +
      getSleepHours('Wednesday') + getSleepHours('Thursday') +
      getSleepHours('Friday') + getSleepHours('Saturday') +
      getSleepHours('Sunday')
  };

  function getIdealSleepHours() {
    const myIdealhours = 8;
    return myIdealhours * 7;
  }

  function calcSleepDebt() {
    if (getActualSleepHours() === getIdealSleepHours()) {
      console.log('You are getting the perfect amount of sleep');
    } else if (getActualSleepHours() > getIdealSleepHours()) {
      console.log('You are sleeping too much');
    } else {
      console.log('You are not getting enough sleep');
      console.log('Your actual sleep hours is ' + getActualSleepHours());
      console.log('Your ideal sleep hours should be ' + getIdealSleepHours());
    };
  }

  calcSleepDebt();


  // MOSH - Max of two numbers

  let number = max(5, 3);
  console.log(number);

  function max(a, b) {
    return (a > b) ? a : b;
  }

  // MOSH - Landscape calc

  console.log(isLandscape(800, 700));

  function isLandscape(width, height) {
    return (width > height);
  }

  // MOSH - fizzBuzz

  const output = fizzBuzz(17);
  console.log(output);

  function fizzBuzz(input) {
    if (typeof input !== 'number')
      return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
      return 'FizzBuzz';

    if (input % 3 === 0)
      return 'Fizz';

    if (input % 5 === 0)
      return 'Buzz';

    return input;
  }

  // MOSH - Odd or Even

  showNumbers(10);

  function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
      const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
      console.log(i, message);
    }
  }

  // MOSH - Count Truthy

  const array = [0, null, undefined, '', 2, 3];

  console.log(countTruthy(array));

  function countTruthy(array) {
    let count = 0;
    for (let value of array)
      if (value)
        count++;
    return count;
  }

  // MOSH - String Properties

  const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
  };

  showProperties(movie);

  function showProperties(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'string')
        console.log(key, obj[key]);
    }
  }

  // MOSH - Multiples

  console.log(sum(10));

  function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
      if (i % 3 === 0 || i % 5 === 0)
        sum += i;

    return sum;
  }

  // MOSH - Average Grade

  const array = [80, 80, 50];

  // 0-59: F
  // 60-69: D
  // 70-79: C
  // 80-89: B
  // 90-100: A

  console.log(calculateGrade(array));

  function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
  }

  function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
      sum += value;
    return sum / array.length;
  }

  // MOSH - Show stars

  showStars(2);

  function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
      let pattern = '';
      for (let i = 0; i < row; i++)
        pattern += '*';
      console.log(pattern);
    }
  }

  // MOSH - Show primes

  showPrimes(10);

  function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
      if (isPrime(number)) console.log(number);
  }

  function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
      if (number % factor === 0)
        return false;

    return true;
  }