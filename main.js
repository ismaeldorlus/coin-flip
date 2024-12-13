// COIN FLIP SIMULATOR

// Button Event Listener
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

let numHeads = 0;
let numTails = 0;

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Generate a random Number
  let randNum = Math.random();
  console.log(randNum);

  // Simulate the flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png'>";
    numHeads = numHeads + 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src= 'img/tails.png'>";
    numTails = numTails + 1;
    tailsEl.innerHTML = numTails;
  }
}

document.getElementById("dice-btn").addEventListener("click", diceRolled);
let diceOut = document.getElementById("dice-out");

function diceRolled() {
  let randNum2 = Math.floor(Math.random() * 6 + 1);
  console.log(randNum2);
  if (randNum2 == 1) {
    diceOut.innerHTML = "<img src='img/1.png' />";
  } else if (randNum2 == 2) {
    diceOut.innerHTML = "<img src='img/2.png' />";
  } else if (randNum2 == 3) {
    diceOut.innerHTML = "<img src='img/3.png' />";
  } else if (randNum2 == 4) {
    diceOut.innerHTML = "<img src='img/4.png' />";
  } else if (randNum2 == 5) {
    diceOut.innerHTML = "<img src='img/5.png' />";
  } else if (randNum2 == 6) {
    diceOut.innerHTML = "<img src='img/6.png' />";
  }
}
