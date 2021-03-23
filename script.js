let number = 0
let guess = 0
// variables
number = Math.random() * 6 + 1
number = parseInt(number)
// The random number generater, math.random makes sure its not as decimals, the little equation in the back sets the range and parseint turns it into an integer
document.getElementById('button').addEventListener('click', random)
// function once the button is pressed
function random () {
  let guess = document.getElementById('input').value
  guess = parseInt(guess)
// gets the value from the inputbox and turns it into a number
  
  
  if (guess === number) {
    document.getElementById('paratext').innerHTML = 'You got it Correct!'
  } else {
    document.getElementById('paratext').innerHTML = 'Incorrect! Try Again'
  }
}
// compares the input with the random number and uses the if...else statement to show text depending on the answer

document.getElementById('reset').addEventListener('click', reset)

function reset () {
  location.reload()
}
// resets the page by refreshing it so it can come up with a new number
