// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const like = document.querySelector(".like-glyph");
const errorMessage = document.querySelector("#modal");
const errorText = document.querySelector("#modal-message");

errorMessage.classList.add("hidden");

function hidden() {
  errorMessage.classList.add("hidden");
}

like.addEventListener("click", () => {
  mimicServerCall()
    .then(() => {
      if (like.textContent === EMPTY_HEART) {
          like.textContent = FULL_HEART;
          like.classList.add("activated-heart"); 
      } else {
          like.textContent = EMPTY_HEART;
          like.classList.remove("activated-heart"); 
      }
    })
    .catch((error) => {
      errorText.textContent = error;
      errorMessage.classList.remove("hidden");
      setTimeout(hidden, 3000);
      console.error(error);
    });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
