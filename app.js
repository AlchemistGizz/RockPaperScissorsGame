const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

let playerName = "Player";

document
  .getElementById("nameForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const inputElement = document.getElementById("playerNameInput");
    playerName = inputElement.value.trim() || "Player";

    document.getElementById("playerDisplay").textContent = `${playerName} 👽:`;
    document.getElementById("nameFormSection").style.display = "none";
  });
 
/* short one
function playGame (playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3) ];
    let result = "";
    if (playerChoice === computerChoice){
        result ="IT'S A TIE";
    }
    const winOver= {
        rock:"scissors",
        paper:"rock",
        scissors:"paper"
    };
    return(computerChoice === winOver[playerChoice] )
    ? "YOU WIN🤩✨"
    : "YOU LOSE😒";
}*/

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  if (playerChoice === computerChoice) {
    result = "IT'S A TIE🫠";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN🤩✨" : "YOU LOSE😒";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN🤩✨" : "YOU LOSE😒";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN🤩✨" : "YOU LOSE😒";
        break;
    }
  }
  playerDisplay.textContent = `PLAYER👽: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER💻: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove(
    "winAnimation",
    "loseAnimation",
    "greenText",
    "reddText",
    "tieAnimation",
    "blinkAnimation"
  );

  // Animation color and efect from css
  switch (result) {
    case "YOU WIN🤩✨":
      resultDisplay.classList.add("winAnimation", "greenText",);
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE😒":
      resultDisplay.classList.add("loseAnimation", "reddText");
      computerScore++;
      computerScoreDisplay.textContent = playerScore;
      break;
    case "IT'S A TIE🫠":
      resultDisplay.classList.add("tieAnimation", "blinkAnimation");
      break;
  }
}
