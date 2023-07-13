window.addEventListener('load', function() {
  setTimeout(removeSplashScreen, 14000); // Remove splash screen after 3 seconds
});

function removeSplashScreen() {
  var splashScreen = document.querySelector('.splash-screen');
  splashScreen.parentNode.removeChild(splashScreen);

  // Add code to navigate to the next screen
  window.location.href = 'next.html';
}

document.addEventListener('DOMContentLoaded', function() {
  var welcomeMessage = document.querySelector('.welcome-message');

  function showMessage() {
    welcomeMessage.style.display = 'block';
    setTimeout(hideMessage, 2000);
  }

  function hideMessage() {
    welcomeMessage.style.display = 'none';
    setTimeout(showMessage, 2000);
  }

  showMessage();
});