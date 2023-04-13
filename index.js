console.log("Hello World");

let playerScore = 0
let compScore = 0

const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = arrOfChoices[randomNum]
    return compChoice
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return 'You tied! You both picked ${playerSelection}'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        //compScore = compScore + 1
        compScore++
        return 'You lost! Rock crushes scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++
        return 'You won! Scissors cut paper'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        return 'You lost! Paper covers rock'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You won! Rock crushes scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        return 'You lost! Scissors cut paper'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You won! Paper covers rock'
    }
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose what to throw', 'Rock, Paper, Scissors').toLowerCase()
        const computerSelection = computerPlay()
        playRound(playerSelection, computerSelection)
    }

    if (playerScore > compScore) {
        return 'You beat the computer! You are a geniuis!'
    } else if (playerScore < compScore) {
        return 'You got beat by the computer! Practice your throws!'
    } else {
        return 'You tied with the computer! Not too bad'
    }
}
console.log(game())