// script.js
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');
let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
        input = eval(input).toString(); // Perform calculation
      } catch {
        input = 'Error'; // Handle invalid inputs
      }
    } else if (value === 'C') {
      input = ''; // Clear input
    } else {
      input += value; // Append to input
    }

    screen.value = input; // Update screen
  });
});
