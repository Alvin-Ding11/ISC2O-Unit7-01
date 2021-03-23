randomNumber = Math.random() * 6 + 1
randomNumber = parseInt(randomNumber)

document.getElementById('button').addEventListener('click', random)
let randomNumber = 0
let userguess = 0

function random () {
  // gets the values from the number in the text box
  let userguess = document.getElementById('input').value
  userguess = parseInt(userguess)

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
