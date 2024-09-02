let scr1 = 0;
let scr2 = 0;

const msg = document.querySelector("#msg");
const userScr = document.querySelector("#user");
const compScr = document.querySelector("#Computer");
const computerChoice = () => {
  const option = ["rock", "paper", "Scissor"];
  const rand = Math.floor(Math.random() * 3);
  return option[rand];
};

const showWinner = (userWin) => {
  if (userWin) {
    scr1++;
    userScr.innerText = scr1;
    msg.innerText = "You Won!";
    msg.style.backgroundColor = "green";
  } else {
    scr2++;
    compScr.innerText = scr2;
    msg.innerText = "You Loose!";
    msg.style.backgroundColor = "red";
  }
};
const PlayGame = (userChoice) => {
  console.log("userchoice", userChoice);
  const compChoice = computerChoice();
  console.log("computer choice", compChoice);

  if (userChoice === compChoice) {
    DrowGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice == "Scissor  " ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

const DrowGame = () => {
  msg.innerText = "Game is Drow!";
  console.log("Game was Drow");
  msg.style.backgroundColor = "black";
};

// Select all elements with the class "choices"
const choices = document.querySelectorAll(".choices");
// Loop through each element and add a click event listener
choices.forEach(function (choice) {
  choice.addEventListener("click", function () {
    const userChoice = choice.getAttribute("id"); // `this` refers to the clicked element
    PlayGame(userChoice);
  });
});
