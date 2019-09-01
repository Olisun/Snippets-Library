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

myVar.addEventListener('click', function() {
  // function code.....
})

myVar.removeEventListener('click', function() {
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

document.onkeyup = function(event) {
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

document.onkeyup = function(event) {
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

document.onkeyup = function(event) {
  var keypress = event.key;
  if (keypress === 'd') {
    test.classList.add('myStyle');
  }
}