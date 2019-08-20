const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

const gameOne = new Hangman('Cat', 2)

puzzleEl.textContent = gameOne.getPuzzle()
guessesEl.textContent = gameOne.getStatusMessage()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    gameOne.makeGuess(guess)
    puzzleEl.textContent = gameOne.getPuzzle()
    guessesEl.textContent = gameOne.getStatusMessage()
})