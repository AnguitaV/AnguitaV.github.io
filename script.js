// Get the input element and button element
const input = document.getElementById('text-input');
const button = document.getElementById('enter-button');

// Get the output element
const output = document.getElementById('output');

// Function to handle text input
function handleInput() {
    // Get the text entered by the user
    const text = input.value;

    // Display the text in the output element
    output.textContent = text;

    // Clear the input field
    input.value = '';
}

// Event listener for the button click
button.addEventListener('click', handleInput);

// Event listener for pressing Enter key in the input field
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleInput();
    }
});