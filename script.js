const messageOnClick = document.getElementById('clickMessage');;

// === Mouse Event === //
document.getElementById('clickButton').addEventListener('click', function() {
    messageOnClick.style.display = 'block';

    // Timeout (something extra for fun!)
    setTimeout(() => {
      messageOnClick.style.display = 'none';
  }, 3000);
});