// User Login

// Event Listener
document.getElementById('loginBtn').addEventListener('click', signIn)

// Global variables
let userInput;
let passInput;

// Event Functions
function signIn() {
  // INPUT
  userInput = document.getElementById('userInfo').value;
  passInput = document.getElementById('passInfo').value;
  // PROCESS
  if (userInput == 'darian' && passInput == 'testPass') {
    alert('Sign-in successful');
  }
    else if (userInput != 'darian' && passInput == 'testPass') {
      alert('Sign-in unsuccessful; username is invalid.');
    }
      else if (userInput == 'darian' && passInput != 'testPass') {
        alert('Sign-in unsuccessful; password is invalid.');
      }
        else {
          alert('Sign-in unsuccessful; username and password are invalid.');
        }
}