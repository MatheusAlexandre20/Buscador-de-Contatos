const result = document.querySelector('.result')
const yourScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber=0
let machineScoreNumber=0


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}



const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Maquina: ' + machine)
    if (human === machine) {
        result.innerHTML = 'Deu empate'
    } else if (human === 'rock' && machine === 'scissors'
        || human === 'paper' && machine === 'rock'
        || human === 'scissors' && machine === 'paper') {
        result.innerHTML = 'Você ganhou'
        humanScoreNumber++
        yourScore.innerHTML = humanScoreNumber
    } else {
        result.innerHTML = 'Você perdeu para ALEXA'
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    }

}
