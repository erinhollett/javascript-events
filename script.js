

// === Mouse Event === //
const messageOnClick = document.getElementById('clickMessage');

document.getElementById('clickButton').addEventListener('click', function() {
    messageOnClick.style.display = 'block';

    // EXTRA:
    // Use timeout to make the message dissapear after 3 seconds (so the user can keep petting the pet!)
    setTimeout(() => {
      messageOnClick.style.display = 'none';
  }, 3000);
});


// === Keyboard Event === //
const input = document.getElementById('petName')
const output = document.getElementById('showName');

// EXTRA:
// Make the name the placeholder if nothing is entered
function getPetName() {
  const pName = input.value.trim(); // Trim spaces
  if (pName === "") {
  return input.placeholder;
  } else {
  return pName;
  }
}

output.textContent = "You're naming your pet: " + getPetName();

function placePetName(event) {
  setTimeout(() => {
    output.textContent = "You're naming your pet: " + getPetName();
  }, 1); // Adding a 1sec delay fixed the ability to use backspace to delete text
}

document.addEventListener('keypress', placePetName);
document.addEventListener('keydown', placePetName);

document.getElementById('refresh').addEventListener('click', function() {
  input.value = '';
  output.textContent = "You're naming your pet: " + getPetName();
});

// === Form Event === //
const form = document.getElementById('myForm');
const submitMessage = document.getElementById('messageContainer');

document.addEventListener('DOMContentLoaded', function() {
  form.addEventListener('submit', function(event) {
    console.log('Form submitted');
    event.preventDefault(); // Prevent the actual form submission
    submitMessage.textContent = "Submitted! Thank you for adopting " + getPetName() + "!";
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
  emailFeedback.textContent = "Please enter your email.";
});
emailInput.addEventListener('blur', () => {
  emailFeedback.textContent = "";
});

// === Event Delegation === //
const list = document.getElementById('toyBox');

list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
      selectMessage.textContent = "You gave: " + getPetName() + " a " + event.target.textContent;
      event.target.classList.add('selected');
  }
});