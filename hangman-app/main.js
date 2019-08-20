const Hangman = function (word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const gameOne = new Hangman('California', 5)
console.log(gameOne)

const gameTwo = new Hangman('London', 3)
console.log(gameTwo)