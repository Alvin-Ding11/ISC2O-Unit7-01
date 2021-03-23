randomNumber = Math.random() * 6 + 1
randomNumber = parseInt(randomNumber)

let number = 0
let guess = 0

document.getElementById('button').addEventListener('click', random)

function random () {
  // gets the values from the number in the text box
  let guess = document.getElementById('input').value
  guess = parseInt(guess)

  if (guess === number) {
    document.getElementById('paratext').innerHTML = 'You got it Correct!'
  } else {
    document.getElementById('paratext').innerHTML = 'Incorrect! Try Again'
  }
}

document.getElementById('reset').addEventListener('click', reset)

function reset () {
  location.reload()
}
