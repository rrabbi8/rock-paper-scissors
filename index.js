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

const showResult = (winner, loser) => {
	const container = document.querySelector(".container");
	const content = document.createElement("div");
	content.textContent = `${winner} beats ${loser}!`;
	container.appendChild(content);
};

const draw = () => {
	const container = document.querySelector(".container");
	const content = document.createElement("div");
	content.textContent = `Draw!`;
	container.appendChild(content);
};

const playRound = (playerSelection) => {
	const computerSelection = getComputerChoice();

	console.log(`You choose ${playerSelection}`);
	console.log(`Computer chooses ${computerSelection.id}`);

	if (playerSelection === computerSelection.id) {
		console.log("Draw!");
		draw();
		return 0;
	} else if (
		(playerSelection === "ROCK" && computerSelection.id === "SCISSORS") ||
		(playerSelection === "SCISSORS" && computerSelection.id === "PAPER") ||
		(playerSelection === "PAPER" && computerSelection.id === "ROCK")
	) {
		console.log(
			`You win! ${playerSelection} beats ${computerSelection.id}!`
		);
		showResult(playerSelection, computerSelection.id);
		return PLAYERWIN;
	} else {
		console.log(
			`You lose! ${computerSelection.id} beats ${playerSelection}!`
		);
		showResult(computerSelection.id, playerSelection);
		return COMPWIN;
	}
};

function handleClick(playerSelection) {
	playRound(playerSelection);
}

ROCK.addEventListener("click", () => handleClick(ROCK.id));
PAPER.addEventListener("click", () => handleClick(PAPER.id));
SCISSORS.addEventListener("click", () => handleClick(SCISSORS.id));
