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

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}, (err) => {
    console.log(`Error: ${err}`)
})

getCountry('JP').then((country) => {
    console.log(country.name)
}, (err) => {
    console.log(`Error: ${err}`)
})