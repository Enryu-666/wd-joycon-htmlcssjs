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
    updateDisplay(currentInput);
}


// Button click events
button.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        const dataKey = button.getAttribute('data-key');
        inputText(dataKey);
    });
});


// Initialize
