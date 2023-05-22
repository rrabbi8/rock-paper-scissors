// const ROCK = "Rock";
// const PAPER = "Paper";
// const SCISSORS = "Scissors";
const COMPWIN = 2;
const PLAYERWIN = 1;

const ROCK = document.querySelector("#ROCK");
const PAPER = document.querySelector("#PAPER");
const SCISSORS = document.querySelector("#SCISSORS");

const getComputerChoice = () => {
	const lst = [ROCK, PAPER, SCISSORS];
	const random = lst[Math.floor(Math.random() * lst.length)];
	return random;
};

const playRound = (playerSelection) => {
	const computerSelection = getComputerChoice();

	console.log(`You choose ${playerSelection}`);
	console.log(`Computer chooses ${computerSelection.id}`);

	if (playerSelection === computerSelection.id) {
		console.log("Draw!");
		return 0;
	} else if (
		(playerSelection === "ROCK" && computerSelection.id === "SCISSORS") ||
		(playerSelection === "SCISSORS" && computerSelection.id === "PAPER") ||
		(playerSelection === "PAPER" && computerSelection.id === "ROCK")
	) {
		console.log(
			`You win! ${playerSelection} beats ${computerSelection.id}!`
		);
		return PLAYERWIN;
	} else {
		console.log(
			`You lose! ${computerSelection.id} beats ${playerSelection}!`
		);
		return COMPWIN;
	}
};

function handleClick(playerSelection) {
	playRound(playerSelection);
}

ROCK.addEventListener("click", () => handleClick(ROCK.id));
PAPER.addEventListener("click", () => handleClick(PAPER.id));
SCISSORS.addEventListener("click", () => handleClick(SCISSORS.id));
