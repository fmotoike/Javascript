const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['c', 'e']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

const gameOne = new Hangman('Cat', 3)
console.log(gameOne.getPuzzle())

const gameTwo = new Hangman('New Orleans', 5)
console.log(gameTwo.getPuzzle())