let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let hScore = 0
let gScore = 0

function updateScore(amount,homeOrAway){
  if (homeOrAway === "home") {
    hScore += amount 
    homeScore.textContent = hScore
  }
  else {
    gScore += amount
    guestScore.textContent = gScore
  }
}

// new game function
function newGame() {
  hScore = 0
  gScore = 0
  homeScore.textContent = hScore
  guestScore.textContent = gScore


}



