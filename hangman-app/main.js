const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

const gameOne = new Hangman('New Orleans', 4)

puzzleEl.textContent = gameOne.puzzle
guessesEl.textContent = gameOne.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    gameOne.makeGuess(guess)
    puzzleEl.textContent = gameOne.puzzle
    guessesEl.textContent = gameOne.statusMessage
})

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

getCountry('BR', (error, country) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Country name: ${country.name}`)
    }
})