let scoreHome = document.getElementById("score-home")
let scoreAway = document.getElementById("score-away")
let scoreH = 0
let scoreA = 0

function homeAdd1() {
    scoreH += 1
    scoreHome.textContent = scoreH
}

function homeAdd2() {
    scoreH += 2
    scoreHome.textContent = scoreH
}

function homeAdd3() {
    scoreH += 3
    scoreHome.textContent = scoreH
}

function awayAdd1() {
    scoreA += 1
    scoreAway.textContent = scoreA
}

function awayAdd2() {
    scoreA += 2
    scoreAway.textContent = scoreA
}

function awayAdd3() {
    scoreA += 3
    scoreAway.textContent = scoreA
}

function resetAll() {
    scoreHome.textContent = 0
    scoreAway.textContent = 0
    scoreH = 0
    scoreA = 0
}