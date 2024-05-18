const canvas = document.getElementById('diceCanvas');
const ctx = canvas.getContext('2d');
const diceNumbers = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

// Function to draw a dice with the given number
function drawDice(number) {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.font = '150px serif';
    ctx.textAlign = 'center';
    ctx.fillText(diceNumbers[number - 1], canvas.width / 2, canvas.height / 2);
}

// Function to roll the dice
function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    drawDice(randomNumber);
}

// Event listener for space key press
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        rollDice();
    }
});

// Initial draw of the dice with number 1
drawDice(6);