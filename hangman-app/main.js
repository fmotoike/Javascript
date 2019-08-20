const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

const gameOne = new Hangman('New Orleans', 2)

puzzleEl.textContent = gameOne.puzzle
guessesEl.textContent = gameOne.statusMessage

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    gameOne.makeGuess(guess)
    puzzleEl.textContent = gameOne.puzzle
    guessesEl.textContent = gameOne.statusMessage
})