/*
ROCK SCISSORS PAPER GAME

Play a game against computer
Player types 'rock','scissors' or 'paper'.
Store input in variable. playerChoice DONE
Program reads input as case insensitive.DONE
If input is something else as intended return 'Inaproperired value'. DONE

Computer draws a random choice between rock scissors and paper. DONEEEE!
Draw is stored inside variable computerChoice. DONE
Compare playerChoice and computerChoice.
If they are equal it's a draw.
If player chose paper and computer rock. player wins.
else player loses
If player chose scissors and computer paper. player wins.
else player loses
If player chose rock and computer scissors. player wins.
else player loses

If someone wins he gains a point.
If its a draw noone gets points and round starts again.
Game ends when someone gets 5 points

*/
const results = document.querySelector('.results');
const playerPick = document.querySelector('#player-pick');
const computerPick = document.querySelector('#computer-pick');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const outcome = document.querySelector('.outcome');
const playerPoints = document.querySelector('#player-points');
const computerPoints = document.querySelector('#computer-points')
const battleGround = document.querySelector('.battle-ground')

const getComputerChoice = () => {
    let choice = getRandom(3)
    if (choice === 1) {
        computerPick.innerHTML = '<img src="./images/hand-rock-svgrepo-com.svg" alt="">'
        return 'rock'
    } else if (choice === 2) {
        computerPick.innerHTML = '<img src="./images/paper-roll-svgrepo-com.svg" alt="">'
        return 'paper'
    } else if (choice === 3) {
        computerPick.innerHTML = '<img src="./images/scissors-svgrepo-com.svg" alt="">'
        return 'scissors'
    }
}


const getRandom = (number) => Math.floor(Math.random() * number) + 1
getComputerChoice()

let playerPoint = 0;
let computerPoint = 0;

const returnWinner = () => {
    if (playerPoint === 5) {
        outcome.textContent = 'YOU WON!';
        playerPoint = 0;
        computerPoint = 0;
        returnPoints();
    } else if (computerPoint === 5) {
        outcome.textContent = 'YOU LOSE!';
        playerPoint = 0;
        computerPoint = 0;
        returnPoints();

    }}
    function playing(){
        playerPoint++;
        outcome.textContent = 'You gain a point'
        returnPoints();
        returnWinner();
        battleGround.classList.toggle('victory');
    }

    const playRound = (playerSelection) => {
        const computerSelection = getComputerChoice()
        if (computerSelection === playerSelection) {
            outcome.textContent = 'DRAW!'
            returnPoints();
            returnWinner();
            battleGround.classList.remove('victory','defeat');
            return;
        } else if (playerSelection === 'rock' & computerSelection === 'scissors') {
            playing();
            return;
        } else if (playerSelection === 'paper' & computerSelection === 'rock') {
            playing();
            return;
        } else if (playerSelection === 'scissors' & computerSelection === 'paper') {
            playing();
            return;
        }
        computerPoint++;
        outcome.textContent = 'Computer gains a point'
        returnPoints();
        returnWinner();
        battleGround.classList.remove('victory');
        battleGround.classList.toggle('defeat');
    }
    function returnPoints() {
        playerPoints.textContent = playerPoint;
        computerPoints.textContent = computerPoint;
    }
    computerPick.innerHTML = ''




    rock.addEventListener('click', () => playRound('rock'))
    rock.addEventListener('click', () => {
        playerPick.innerHTML = '<img src="./images/hand-rock-svgrepo-com.svg" alt="">'
    })
    paper.addEventListener('click', () => playRound('paper'))
    paper.addEventListener('click', () => {
        playerPick.innerHTML = '<img src="./images/paper-roll-svgrepo-com.svg" alt="">'
    })
    scissors.addEventListener('click', () => playRound('scissors'))
    scissors.addEventListener('click', () => {
        playerPick.innerHTML = '<img src="./images/scissors-svgrepo-com.svg" alt="">'
    })
