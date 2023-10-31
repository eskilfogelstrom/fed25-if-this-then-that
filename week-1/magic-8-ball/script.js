function getUserInput() {
    return prompt('What is your question?');
}

function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

function displayMessage(message) {
    alert(message);
}

while (true) {
    let input = getUserInput();

    let number = getRandomNumber();

    if (number === 0) {
        displayMessage('Yes');
    } else if (number === 1) {
        displayMessage('No');
    } else if (number === 2) {
        displayMessage('Seems unlikely');
    }

    let answer = confirm('Continue?');

    if (answer === false) {
        break;
    }
}
