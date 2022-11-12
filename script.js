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

const getComputerChoice=()=>{
let choice=getRandom(3)
if(choice===1){
    return 'rock'
}else if(choice===2){
    return 'paper'
}else if(choice===3){
    return 'scissors'
}
}

const getRandom=(number)=> Math.floor(Math.random()*number)+1
getComputerChoice()


const getPlayerChoice=()=>{
    let playerChoice=prompt("What's your draw? (Rock, Paper, Scissors)").toLowerCase()
    if(playerChoice==='rock'){
        return playerChoice
    }else if(playerChoice==='paper'){
        return playerChoice
    }else if(playerChoice==='scissors'){
        return playerChoice
    }
    console.log("Not what I wanted. Try again!")
    return getPlayerChoice()
}



console.log("Let's play rock, paper, scissors.")
playGame()

function playGame(){
    let playerPoints=0
    let computerPoints=0
    while(true){
        const result=playRound()
        if(result==='draw'){
            continue
        }
        result?playerPoints++:computerPoints++
        console.log(`You:${playerPoints} vs. Computers:${computerPoints}`)
        if(playerPoints===2){
            alert('You win!')
            break
        }else if (computerPoints===2){
            alert('You lose!')
            break
        }
    }
}

function playRound(){
    const computerSelection=getComputerChoice()
    const playerSelection=getPlayerChoice()
    console.log(`You selected ${playerSelection} vs computer's ${computerSelection}`)
    if(computerSelection===playerSelection){
        console.log('DRAW!')
        return 'draw'
    }else if(playerSelection==='rock'&computerSelection==='scissors'){
        console.log('You gain a point')
        return true
    }else if(playerSelection==='paper'&computerSelection==='rock'){
        console.log('You gain a point')
        return true
    } else if(playerSelection==='scissors'&computerSelection==='paper'){
        console.log('You gain a point')
        return true
    }
    console.log('Computer gains a point')
    return false
}