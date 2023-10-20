

const result = document.querySelector(".result")
const yourScore = document.querySelector(".your-score")
const machineScore = document.querySelector(".machine-score")

let humanScorePontuation = 0
let machineScorePontuation = 0

//ENUMS
const GAME_OPTIONS = {
ROCK: 'rock',
PAPER: 'paper',
SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {

    PlayTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}
const PlayTheGame = (human, machine) => {

    console.log('Humano: ' + human + ' Machine: ' + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!"

    } else if ((human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
               (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) ||
               (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK)) {
                humanScorePontuation++
                yourScore.innerHTML = humanScorePontuation
        result.innerHTML = "Você VENCEU!"
    } else {
        machineScorePontuation++
        machineScore.innerHTML = machineScorePontuation
        result.innerHTML = "Você PERDEU..."

    }

}

/*

Math.floor antes do Math.random arredondo todos os números sorteados para baixo.
O Math.random serve para sortear um número entre 0 e 1 que neste caso multiplica-se
 o resultado por 3 e arredonda o número

*/
