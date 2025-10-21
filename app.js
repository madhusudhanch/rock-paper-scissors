let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats computer's ${compChoice}`;
    // msg.style.backgroundColor = "green";
    console.log("You Win!");
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. Computer's ${compChoice} beats your ${userChoice}`;
    // msg.style.backgroundColor = "red";
    console.log("You Lost.");
  }
};

const drawGame = () => {
  msg.innerText = "Game was draw. Play again.";
  console.log("Game was Draw");
//   msg.style.backgroundColor = "rgb(0, 0, 72)";
};

const playGame = (userChoice) => {
  console.log("User choice:", userChoice);
  const compChoice = generateComputerChoice();
  console.log("Computer choice:", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
