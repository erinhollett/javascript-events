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