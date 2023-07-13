window.addEventListener('load', function() {
  setTimeout(removeSplashScreen, 10000); // Remove splash screen after 3 seconds
});

function removeSplashScreen() {
  var splashScreen = document.querySelector('.splash-screen');
  splashScreen.parentNode.removeChild(splashScreen);

  // Add code to navigate to the next screen
  window.location.href = 'next.html';
}