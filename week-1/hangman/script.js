// Function to display the word with all letters guessed correctly
function formatWord(word, correctGuesses) {
    return word
        .split('')
        .map(letter => {
            if (correctGuesses.includes(letter)) {
                return letter;
            } else {
                return '_';
            }
        })
        .join(' ');
}

// Function that checks if every letter in the word
// is within the correct guesses array.
function checkWin(word, correctGuesses) {
    return word.split('').every(letter => correctGuesses.includes(letter));
}

while (true) {
    // Input tutnred to uppercase to always compare capital letters
    let word = prompt('Pick a word').toUpperCase();
    let correctGuesses = [];
    let incorrectGuesses = [];

    while (true) {
        let formattedWord = formatWord(word, correctGuesses);

        let guess = prompt(`
            ${formattedWord}
            \n
            You have ${5 - incorrectGuesses.length} left. Guess a letter:
        `).toUpperCase();

        if (word.includes(guess)) {
            correctGuesses.push(guess);
        } else {
            incorrectGuesses.push(guess);
        }

        if (checkWin(word, correctGuesses)) {
            alert(`You won :D The word is ${word}`);
            break;
        } else if (incorrectGuesses.length >= 5) {
            alert(`You lost :( The word was ${word}`);
            break;
        }
    }

    let answer = confirm('Play again?');

    if (answer === false) {
        break;
    }
}
