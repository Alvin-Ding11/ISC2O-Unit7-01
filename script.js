let randomNumber = 0
let userguess = 0


randomNumber = Math.random() * 6 + 1
randomNumber = parseInt(randomNumber)

document.getElementById('button').addEventListener('click', random)

function random () {
  // gets the values from the number in the text box
  let userGuess = document.getElementById('input').value
  userguess = parseInt(userGuess)

  if (userguess === randomNumber) {
    document.getElementById('paratext').innerHTML = 'You got it Correct!'

  } else {
    document.getElementById('paratext').innerHTML = 'Incorrect! Try Again'
  }
}

document.getElementById('reset').addEventListener('click', reset)

function reset () {
  location.reload()
}
