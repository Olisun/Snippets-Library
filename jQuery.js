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

// To get the value of numbers using jquery:

$(".number").value