const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const COMPWIN = 2;
const PLAYERWIN = 1;

const getComputerChoice = () => {
	const lst = [ROCK, PAPER, SCISSORS];
	const random = lst[Math.floor(Math.random() * lst.length)];
	return random;
};

const playRound = () => {
	const playerSelection = prompt("Enter Rock, Paper, or Scissors: ");
	const computerSelection = getComputerChoice();
	console.log(`You choose ${playerSelection}`);
	console.log(`Computer chooses ${computerSelection}`);

	if (playerSelection === computerSelection) {
		console.log("Draw!");
		return 0;
	} else if (
		(playerSelection === ROCK && computerSelection === SCISSORS) ||
		(playerSelection === SCISSORS && computerSelection === PAPER) ||
		(playerSelection === PAPER && computerSelection === ROCK)
	) {
		console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
		return PLAYERWIN;
	} else {
		console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
		return COMPWIN;
	}
};

const game = () => {
	let compScore = 0;
	let playerScore = 0;
	for (let i = 0; i < 5; i++) {
		let winner = playRound();
		if (winner === COMPWIN) {
			compScore++;
		} else if (winner === PLAYERWIN) {
			playerScore++;
		}
		console.log(`Score: Computer ${compScore}, You ${playerScore}`);
	}
	if (compScore > playerScore) {
		return `You lose! Final score: Computer ${compScore}, You ${playerScore}`;
	} else {
		return `You win! Final score: Computer ${compScore}, You ${playerScore}`;
	}
};

console.log(game());
