const COMPWIN = 2;
const PLAYERWIN = 1;

const ROCK = document.querySelector("#ROCK");
const PAPER = document.querySelector("#PAPER");
const SCISSORS = document.querySelector("#SCISSORS");

let playerScore = 0;
let computerScore = 0;
let draw = 0;

const getComputerChoice = () => {
	const lst = [ROCK, PAPER, SCISSORS];
	const random = lst[Math.floor(Math.random() * lst.length)];
	return random;
};

const showResult = (playerSelection, computerSelection, winner) => {
	const result = document.querySelector(".result");

	if (winner === "Draw") {
		draw++;
		if (draw > 1) {
			result.textContent = `Draw ${draw}!`;
		} else {
			result.textContent = "Draw!";
		}
	} else if (winner === playerSelection) {
		draw = 0;
		result.textContent = `You win! You choose ${playerSelection}. Computer chooses ${computerSelection}`;
	} else {
		draw = 0;
		result.textContent = `You lose! You choose ${playerSelection}. Computer chooses ${computerSelection}`;
	}

	const scoreCard = document.querySelector(".scoreCard");

	scoreCard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;

	// Check if either player or computer has reached a score of 5
	if (playerScore === 5) {
		declareWinner("Player");
	} else if (computerScore === 5) {
		declareWinner("Computer");
	}
};

const declareWinner = (winner) => {
	const result = document.querySelector(".result");
	result.textContent = `${winner} wins the game! Why waste time completing the game? -> Move on to the next module!`;

	// Disable the click events on buttons to prevent further gameplay
	ROCK.removeEventListener("click", handleClick);
	PAPER.removeEventListener("click", handleClick);
	SCISSORS.removeEventListener("click", handleClick);

	// Create a replay button
	const replayButton = document.createElement("button");
	replayButton.classList.add("replayBtn");
	replayButton.textContent = "Waste More Time and Play Again";
	replayButton.addEventListener("click", replayGame);

	const replayButtonContainer = document.querySelector(
		".replayButtoncontainer"
	);
	replayButtonContainer.appendChild(replayButton);
};

const playRound = (playerSelection, computerSelection) => {
	if (playerSelection === computerSelection.id) {
		showResult(playerSelection, computerSelection.id, "Draw");
	} else if (
		(playerSelection === "ROCK" && computerSelection.id === "SCISSORS") ||
		(playerSelection === "SCISSORS" && computerSelection.id === "PAPER") ||
		(playerSelection === "PAPER" && computerSelection.id === "ROCK")
	) {
		playerScore++;
		showResult(playerSelection, computerSelection.id, playerSelection);
	} else {
		computerScore++;
		showResult(playerSelection, computerSelection.id, computerSelection.id);
	}
};

function handleClick(event) {
	const playerSelection = event.target.id;
	const computerSelection = getComputerChoice();
	playRound(playerSelection, computerSelection);
}

function replayGame() {
	// Reset scores and result text
	playerScore = 0;
	computerScore = 0;
	const result = document.querySelector(".result");
	result.textContent = "";

	// Remove replay button
	const replayButton = document.querySelector(".replayBtn");
	replayButton.remove();

	// Add event listeners back to the buttons
	ROCK.addEventListener("click", handleClick);
	PAPER.addEventListener("click", handleClick);
	SCISSORS.addEventListener("click", handleClick);

	// Clear the score card
	const scoreCard = document.querySelector(".scoreCard");
	scoreCard.textContent = "";
}

ROCK.addEventListener("click", handleClick);
PAPER.addEventListener("click", handleClick);
SCISSORS.addEventListener("click", handleClick);
