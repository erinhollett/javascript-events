const messageOnClick = document.getElementById('clickMessage');


// === Mouse Event === //
document.getElementById('clickButton').addEventListener('click', function() {
    messageOnClick.style.display = 'block';

    // Timeout (something extra for fun!)
    setTimeout(() => {
      messageOnClick.style.display = 'none';
  }, 3000);
});


// === Keyboard Event === //
const input = document.getElementById('petName')
const output = document.getElementById('showName');

document.addEventListener('keypress', function(event) {
  setTimeout(() => {
    output.textContent = "You're naming your pet: " + input.value;
  }, 0);
});

document.getElementById('refresh').addEventListener('click', function() {
  input.value = '';
  output.textContent = "You're naming your pet:";
})

// === Form Event === //
const form = document.getElementById('myForm');
const submitMessage = document.getElementById('messageContainer');

document.addEventListener('DOMContentLoaded', function() {
  form.addEventListener('submit', function(event) {
    console.log('Form submitted');
    event.preventDefault(); // Prevent the actual form submission
    submitMessage.textContent = "Submitted! Thank you for adopting " + input.value + "!";
  });
});

// === Focus Event === //
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameFeedback = document.getElementById('nameFeedback');
const emailFeedback = document.getElementById('emailFeedback');


nameInput.addEventListener('focus', () => {
  nameFeedback.textContent = "Please enter your full name.";
});
nameInput.addEventListener('blur', () => {
  nameFeedback.textContent = "";
});

emailInput.addEventListener('focus', () => {
  emailFeedback.textContent = "We won't share your email.";
});
emailInput.addEventListener('blur', () => {
  emailFeedback.textContent = "";
});