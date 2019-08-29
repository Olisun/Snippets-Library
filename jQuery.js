// DOM click. (HTML below)
// <h3 id="pbj">Peanut Butter Jelly</h3>
// <h3 id="grilledcheese">Grilled Cheese</h3>
// <h3 id="roastbeef">Roast Beef</h3>
// <h1> --> to grab an element tag use $("h3")
// id="pbj" --> to grab id's use $("#pbj")
// id="roastbeef" --> to grab id's use $("#pbj")


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