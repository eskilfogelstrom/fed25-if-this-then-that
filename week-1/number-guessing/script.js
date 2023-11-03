// Infinte loop for playing again
while (true) {
    let guesses = 5; // Variable for amoun of guesses left
    let number = Math.floor(Math.random() * 100) + 1; // Generate random number between 1-100

    // Loop while still have guesses left
    while (guesses > 0) {
        alert(`You have ${guesses} left`);

        // Get user's guess
        let guess = Number(prompt('Guess a number'));

        if (guess === number) {
            alert('You won!!!');
            break;
        } else if (guess < number) {
            alert('Higher');
        } else if (guess > number) {
            alert('Lower');
        }

        guesses -= 1;
    }

    let answer = confirm('Play again?');

    // If press cancel break out of loop
    if (answer === false) {
        break;
    }
}
