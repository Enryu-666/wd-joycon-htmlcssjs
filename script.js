// Calculator logic for modern calculator

const display = document.getElementById('display');
const button = document.querySelectorAll('button');

let currentInput = '';
let goingInput = '';
/*
let up = '';
let down = '';
let left = '';
let right = '';

let B = '';
let A = '';
*/

// Helper: map HTML symbols to JS operators

function updateDisplay(value) {
    display.textContent = value;
}

function clearAll() {
    currentInput = '';
    goingInput = '';
    updateDisplay('...');
}

function inputText() {
    if (currentInput === '...') {
        currentInput = '';
    } else {
        currentInput += num;
    }
    updateDisplay(currentInput);
}


// Button click events
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        const dataKey = button.getAttribute('data-key');
        if (button.classList.contains('number')) {
            inputNumber(dataKey);
        }
    });
});


// Initialize
clearAll();