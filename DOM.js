// FROM CODEACADEMY
// .body grabs the entire body of the page. 

document.body.innerHTML = 'This is the text of the body element';

// .querySelector grabs CSS selectors/HTML tags (i.e. h1, h1, p, button, etc... tags) IMOPORTANT! - IF YOU TARGET CLASS NAME, PUT '.' INFRONT OF THE NAME!

document.querySelector('h1').innerHTML = 'Change to ......';

// .getElementById grabs id's from the HTML.

document.getElementById('myID').innerHTML = 'Change to ......';

// .style property is used to change the inline style of a specified HTML tag. The new propewrty must be in ''s. IMOPORTANT! - IF YOU TARGET CLASS NAME, PUT '.' INFRONT OF THE NAME!

document.querySelector('.body').style.background = 'blue';

// How to create and insert a new element:

const newItem = document.createElement('li'); // <-- or any other tag like p, h1, etc...
newListItem.innerHTML = 'Whatever text......'
document.getElementById("myID").appendChild(newItem); // <-- specified ID s/b parent element.

// How to remove an element:

const removeID = document.getElementById('myID') // <-- ID of the element to be removed.
document.getElementById('parentElemID').removeChild(removeID);

// Each DOM element node has a .parentNode and .children property. The property will return a list of the element’s children and return null if the element has no children.
// The .firstChild property will grant access to the first child of that parent element.

const first = document.body.firstChild;
first.innerHTML = 'I am the child!';
first.parentNode.innerHTML = 'I am the parent and my inner HTML has been replaced!'

// TEST

keys.addEventListener('click', function event() {
  if (event.target.matches('button')) {
    // do this....
  }
})

// Making something (aka img) change per te link after a click.

myVar.onclick = () => {
  myVar.src = linkToSomething;
};

// add.EventListener & removeEventListener examples (using same variable).

myVar.addEventListener('click', function () {
  // function code.....
})

myVar.removeEventListener('click', function () {
  // function code.....
})

// mouseover and mouseout events are triggered when the mouse (or cursor) hovers over and then leaves the spoecified area.

let example = document.getElementById('myExample');

example.addEventListener('mouseover', () => {
  example.style.color = 'red';
});

example.addEventListener('mouseout', () => {
  n
  example.style.color = 'black';
});

// keydown and keyup (also keypress) events are triggred when any key is pressed. Note that you must specify the DOM in the function. See CA Ball for working page.

const ball = document.getElementById('float-circle');
const DOM = document.body;

DOM.addEventListener('keydown', () => {
  ball.style.bottom = '250px';
});

DOM.addEventListener('keyup', () => {
  ball.style.bottom = '50px';
});

// .hidden method hides an element.

const secretMessage = document.getElementById('secretMessage')
const secret = document.getElementById('secret');

secret.hidden = true;

secretMessage.onmousedown = () => {
  secret.hidden = false;
}

secretMessage.onmouseup = () => {
  secret.hidden = true;
}

// Assigning a DOM function each item in an Array. Way better than doing multiple document.getElementById's!

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

singleItem.forEach(eventAssignment); // <-- must call .forEach for every eventAssignment

// From Bootcamp
// Targeting a keypress. user-input is the key you press. use-output is a place holder in HTML

var userInput = document.getElementById("user-input");
var userOutPut = document.getElementById('user-output')

document.onkeyup = function (event) {
  userOutPut.innerHTML = event.key; // event.key determines which key was pressed
};


// NOT FROM CODE ACADEMY
// Targeting a specific keypress event. NOTE - ARROW FUNCTIONS MAY NOTE WORK! See CA Piano for full demo

const keyC = document.getElementById('c-key');
const keyD = document.getElementById('d-key');

window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keyup", checkKeyPressed2, false);

function checkKeyPressed(e) {
  if (e.keyCode == '67') {
    keyC.style.backgroundColor = 'blue';
  } else if (e.keyCode == '68') {
    keyD.style.backgroundColor = 'blue';
  }
};

function checkKeyPressed2(e) {
  if (e.keyCode == '67') {
    keyC.style.backgroundColor = 'white';
  } else if (e.keyCode == '68') {
    keyD.style.backgroundColor = 'white';
  }
};

// Easier Keypress method (from Bootcamp). 

document.onkeyup = function (event) {
  var keypress = event.key;
  if (keypress === 'd') {
    alert('keypress works')
  }
}

// WORKING CODE (Comment out above to view in Chrome)
// Buttons events

const box = document.getElementById('box');
const boxGrow = document.getElementById('boxGrow');
const boxBlue = document.getElementById('boxBlue');
const boxFade = document.getElementById('boxFade');
const boxRotate = document.getElementById('boxRotate');
const secretMessage = document.getElementById('secretMessage');
const favFoodsButton = document.getElementById('favFoodsButton');
const reset = document.getElementById('reset');

boxGrow.addEventListener('click', styleBox6 = () => {
  box.style.transition = 'height 3s, width 3s';
  box.style.height = '300px';
  box.style.width = '300px';
});

boxBlue.addEventListener('click', styleBox2 = () => {
  box.style.backgroundColor = 'blue';
});

boxFade.addEventListener('click', styleBox3 = () => {
  box.style.transition = 'opacity 2s';
  box.style.opacity = 0.1;
});

boxRotate.addEventListener('click', styleBox5 = () => {
  box.style.transition = 'rotate(45deg) 3s';
  box.style.transform = 'rotate(45deg)';
});

secretMessage.addEventListener('click', createElement = () => {
  const node = document.createElement('h2');
  const placeForSecretMessage = document.getElementById('placeForSecretMessage');
  const textNode = document.createTextNode("Javascript in the DOM is fun!  This is only scratching the surface.");

  node.appendChild(textNode);
  placeForSecretMessage.appendChild(node);
});

reset.addEventListener('click', styleBox4 = () => {
  const elem = document.querySelector('h2');

  box.style.height = '150px';
  box.style.width = '150px';
  box.style.backgroundColor = 'orange'; // <-- note background-color from CSS needs to be camelCase in JS.
  box.style.opacity = 1;
  box.style.transform = 'none';
  elem.parentNode.removeChild(elem);
});

// Password verification from input:

const name = document.getElementById('name');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const errorElement = document.getElementById('error');

submit.addEventListener('click', error = () => {
  if (name.value === 'Oliver Sun' && password.value === 'Taylor175$') {
    errorElement.innerHTML = 'Password Authenticated'
  } else {
    errorElement.innerHTML = 'Invalid Password'
  }
});

// Appending to a div in the DOM.

const myDiv = document.getElementById('myDiv');

const append = () => {
  const example = document.createTextNode('I have a wiggly');
  myDiv.appendChild(example);
};

append() // <-- need to call if no event listener is added.

// Appending text from input:

favFoodsButton.addEventListener('click', input = () => {
  const input = document.getElementById('addItem')
  const ol = document.querySelector('ol');
  const li = document.createElement('li');
  const removeButton = document.createElement('button');

  li.appendChild(document.createTextNode(input.value));
  ol.appendChild(li);
  input.value = ''; // <-- clears out the unpit box after you add the text to the list
  removeButton.appendChild(document.createTextNode('Remove'));
  li.appendChild(removeButton);
  removeButton.addEventListener('click', deleteTask = () => {
    li.classList.add('delete');
  });
});

// To change the style of a DOM element associated by a css class. This example is fired by a keypress

var test = document.getElementById('letter4');

document.onkeyup = function (event) {
  var keypress = event.key;
  if (keypress === 'd') {
    test.classList.add('myStyle');
  }
}

// To check if a div is a number

var test = document.getElementById('someDiv')

if (typeof test == 'number') {
  alert('true')
} else {
  alert('false')
};

// Timers from class
//  after 5 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function

setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 15);

//  Step 2:
//  Fill in the blanks to these functions.
function fiveSeconds() {
  // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
  $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
  console.log("10 seconds left");
}

function tenSeconds() {
  // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
  $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
  console.log("5 seconds left");
}

function timeUp() {
  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up"); //  The following line will play the audio file we linked to above:
}

// Timers

var firstGreeting = 'Hello World'
var secondGreeting = 'How are you doing today?'
var thirdGreeting = 'What a beautiful day it is!'
var counter = 10;
var gameOver = 'GAME OVER';

// Function to append 3 strings to the DOM in sequential order

function helloWord() {
  setTimeout(function () {
    $('#test1').append(firstGreeting)
  }, 1000 * 1)

  setTimeout(function () {
    $('#test1').text('');
  }, 1000 * 2)

  setTimeout(function () {
    $('#test1').append(secondGreeting)
  }, 1000 * 3)

  setTimeout(function () {
    $('#test1').text('');
  }, 1000 * 4)

  setTimeout(function () {
    $('#test1').append(thirdGreeting)
  }, 1000 * 5)
}

helloWord();

// Count down timer

function countDown() {
  var wiggly = setInterval(function () {
    $('#test2').text(counter)
    counter--
    if (counter === 0) {
      clearInterval(wiggly)
      $('#test2').text(gameOver)
    }
  }, 1000 * 1)
}

countDown();

// To Convert time to 00:00 format (Bootcamp solved)

var time = 0;

function count() {
  time++;
  var converted = timeConverter(time);
  $("#display").text(converted);
}


function clockFormatter(numToConvert) {
  var minutes = Math.floor(numToConvert / 60);
  var seconds = numToConvert - (minutes * 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  } else if (minutes >= 10) {
    minutes = "00" + minutes
  };
  return minutes + ":" + seconds;
}

// Setting dynamic time using moment.js and setInteral (See Train HW for details). 

var currentTimeDOM = $('#current-time-dom');

var dynamicTime = function () {
  var currentTime = moment();
  var currentTimeFormatted = moment(currentTime).format('HH:mm:ss');
  currentTimeDOM.text(currentTimeFormatted);
}
setInterval(dynamicTime, 1000);
currentTimeDOM.text(dynamicTime);

// Append array of strings to the DOM with jquery

var avengers = ['Captain America', 'Iron Man', 'Thor', 'Dr. Strange', 'Spiderman', 'Captain Marvel'];

for (var i = 0; i < avengers.length; i++) {
  $('#for-buttons').append(avengers[i] + ', ');
}

// To target radio buttons (see Trivia Game)

var question1 = document.avengersQuiz.question1.value;

// Function to have the background color flicker. 

var colorsArray = ['#61E294', '#7BCDBA', '#9799CA', '#BD93D8', '#B47AEA'];
var backGround = document.getElementById('background-color');

function pickColor() {
  var randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
  backGround.style.backgroundColor = randomColor;
};

setInterval(pickColor, 750);

// 3D Cube Transformation

var box = document.querySelector(".box");
var radioGroup = document.querySelector(".radio-group");
var currentClass = "";

changeSide = () => {
  var checkedRadio = radioGroup.querySelector(":checked");
  var showClass = "show-" + checkedRadio.value;
  if (currentClass) {
    box.classList.remove(currentClass);
  }
  box.classList.add(showClass);
  currentClass = showClass;
}

changeSide();

radioGroup.addEventListener("change", changeSide);

// API call with fetch

fetch("https://reqres.in/api/users/")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error"))


// API post with fetch

fetch("https://reqres.in/api/users/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "User 1"
  })
})
  .then(res => {
    return res.json()
  })
  .then(data => console.log(data))
  .catch(error => console.log("Error"))




