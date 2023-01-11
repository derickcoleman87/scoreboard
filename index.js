let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let hScore = 0
let gScore = 0

// add +1 to home score 
function home1() {
    hScore += 1
    homeScore.textContent = hScore
}
  
// add +2 to home score
function home2() {
  hScore += 2
  homeScore.textContent = hScore
}

// add +3 to home score
function home3() {
  hScore += 3
  homeScore.textContent = hScore
}

// add +1 to guest score 
function guest1() {
  gScore += 1
  guestScore.textContent = gScore
}

// add +2 to guest score
function guest2() {
gScore += 2
guestScore.textContent = gScore
}

// add +3 to guest score
function guest3() {
gScore += 3
guestScore.textContent = gScore
}

// new game function
function newGame() {
  let reset = 0
  homeScore.textContent = reset
  guestScore.textContent = reset
  hScore = 0
  gScore = 0

}
