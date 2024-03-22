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

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}<br/>If you do click here:  <a class="button" id="link-button" href="https://github.com/AnguitaV">https://github.com/AnguitaV</a></div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert("Are you sure you want to leave this page?", 'secondary')
  })
}

// Remove default outline on accordion buttons when clicked
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('accordion-button')) {
      event.target.blur(); // Remove focus from the clicked button
    }
  });