// Code that readys the DOM for js and jQuery. Basically the main function for the program. ALL CODE goes in there!
// $ is an alias for jQuery

$(document).ready(function() {

});

// To select HTML element and add css styling

$(document).ready(function() {
  $('body').addClass('jQ-test')
});

// To select HTML element and remove css styling

$(document).ready(function() {
  $('body').removeClass('jQ-test')
    // You can select multiple classes and id's. Note - all the selectors go inside of ''. Can be even more selective with psuedo seletors (see learn jQuery)
  $('h1, h2, #test1').addClass('jQ-test2')
});

// To get the value if the selector is a number:

$(document).ready(function() {
  $(".number").value
});

// To display something from js to a specified selector in the DOM

$(document).ready(function() {
  $("#selector").text(thingYouWantDisplayed[numberIfArrayString])
});

// DOM click. (HTML below)
// <h3 id="pbj">Peanut Butter Jelly</h3>
// <h3 id="grilledcheese">Grilled Cheese</h3>
// <h3 class="roastbeef">Roast Beef</h3>
// <h1> --> to grab an element tag use $("h3")
// id="pbj" --> to grab id's use $("#pbj")
// class="roastbeef" --> to grab class use $("#.roastbeef")


$(document).ready(function() {
  var pbjCount = 0;
  $("#pbj").click(function() {
    alert("The paragraph was clicked.");
    pbjCount++
    alert(`PBJ Count: ${pbjCount}`)
  });

  var roastbeefCount = 0;
  $("#roastbeef").click(function() {
    alert("The paragraph2 was clicked.");
    roastbeefCount++
    alert(`Roastbeef Count: ${roastbeefCount}`)
  });
});

// Button click to generate random number and append to the DOM
// HTML id for button: id="random-button"
// HTML id: id="random-number"
$(document).ready(function() {
  $("#random-button").click(function() {
    var randomNumber = Math.floor(Math.random() * 1000) + 1;
    $("#random-number").text(randomNumber)
  });
});

// Using "this" you can target the exact element within a class of elements
// <button id="button-1" class="btn btn-danger btn-choice" value="1">
// <h1>1</h1>
// </button>
// <button id="button-2" class="btn btn-danger btn-choice" value="2">
// <h1>2</h1>
// </button>
// <button id="button-3" class="btn btn-danger btn-choice" value="3">
// <h1>3</h1>
// </button>
// <button id="button-4" class="btn btn-danger btn-choice" value="4">
// <h1>4</h1>
// </button>

$(document).ready(function() {
  $(".btn-choice").on("click", function() {
    console.log("You clicked a button!!");
    console.log(this);
    console.log($(this).text())
  });
});

// See jQuery exercise 09 (number-checker). Creating a random # generater and comparing if that # is the same as the button the user clicked. User clicked mapped by using $(this).val()

$(document).ready(function() {

  // Here we create the on click event that gets the user's pick
  $(".btn-choice").on("click", function() {

    console.log("You clicked a button!!");
    console.log(this);
    console.log($(this).text());

    // Add code to have the computer guess a random number between 1 and 4
    var randomNumber = Math.floor(Math.random() * 1) + 1;

    // Then determine which button was clicked
    var userClicked = $(this).val()
      // Compare the computer and user guess
    if (parseInt(userClicked) === randomNumber) {
      alert('You guess properly')
    } else {
      alert('You did not guess right')
      alert(randomNumber)
    }
    // Inform the user if the've guessed correctly or incorrectly

  });
});

// For manipulating CSS and animate

$(document).ready(function() {
  // When the textPink button is pressed...
  $("#textPink").on("click", function() {
      // Change funText to pink.
      $("#funText").css("color", "pink")
    })
    // When the boxGrow button is clicked... 
  $("#boxGrow").on("click", function() {
    // Increase the size of the box.
    $("#box").animate({ height: "+=35px", width: "+=35px" }, "fast");
  })
});

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
  console.log("time is up"); // The following line will play the audio file we linked to above:
}

// Timers

var firstGreeting = 'Hello World'
var secondGreeting = 'How are you doing today?'
var thirdGreeting = 'What a beautiful day it is!'
var counter = 10;
var gameOver = 'GAME OVER';

// Function to append 3 strings to the DOM in sequential order

function helloWord() {
  setTimeout(function() {
    $('#test1').append(firstGreeting)
  }, 1000 * 1)

  setTimeout(function() {
    $('#test1').text('');
  }, 1000 * 2)

  setTimeout(function() {
    $('#test1').append(secondGreeting)
  }, 1000 * 3)

  setTimeout(function() {
    $('#test1').text('');
  }, 1000 * 4)

  setTimeout(function() {
    $('#test1').append(thirdGreeting)
  }, 1000 * 5)
}

helloWord();

// Count down timer

function countDown() {
  var wiggly = setInterval(function() {
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

// Append array of strings to the DOM with jquery

var avengers = ['Captain America', 'Iron Man', 'Thor', 'Dr. Strange', 'Spiderman', 'Captain Marvel'];

for (var i = 0; i < avengers.length; i++) {
  $('#for-buttons').append(avengers[i] + ', ');
}