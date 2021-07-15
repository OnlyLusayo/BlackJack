// an object to hold all of the variables for the blackjack app
// to avoid global variable drama
var jsbApp = {};

// Store important elements in variables for later manipulation
jsbApp.pcards = document.getElementById("pcards");
jsbApp.dcards = document.getElementById("dcards");
jsbApp.hitButton = document.getElementById("hit");
jsbApp.stayButton = document.getElementById("stay");
jsbApp.playButton = document.getElementById("play");
jsbApp.textUpdates = document.getElementById("textUpdates");
jsbApp.buttonBox = document.getElementById("buttonBox");
jsbApp.phandtext = document.getElementById("phand");
jsbApp.dhandtext = document.getElementById("dhand");
jsbApp.tracker = document.getElementById("tracker");
jsbApp.newgame = document.getElementById("newgame");
jsbApp.choice = document.getElementById("choice");

var newGame = function () {
  // remove newgame button and show hit/stay buttons
  jsbApp.newgame.classList.add("hidden");
  jsbApp.buttonBox.classList.remove("hidden"); // show hit/stay buttons
  jsbApp.textUpdates.innerHTML = "The initial hands are dealt!";
};
