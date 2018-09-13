//These are the functions for Team A
var pressTeamA = 0;
// Adds 5 points to the scoreboard for Team A
function teamA5() {
    pressTeamA += 5;
    document.getElementById("teamA").innerHTML = pressTeamA;
}
// Adds 4 points to the scoreboard for Team A
function teamA4() {
    pressTeamA += 4;
    document.getElementById("teamA").innerHTML = pressTeamA;
}
// Adds 3 points to the scoreboard for Team A
function teamA3() {
    pressTeamA += 3;
    document.getElementById("teamA").innerHTML = pressTeamA;
}
// Adds 2 points to the scoreboard for Team A
function teamA2() {
    pressTeamA += 2;
    document.getElementById("teamA").innerHTML = pressTeamA;
}
// Adds 1 point to the scoreboard for Team A
function teamA1() {
    pressTeamA += 1;
    document.getElementById("teamA").innerHTML = pressTeamA;
}
// Resets the score of Team A to zero!
function resetA() {
    pressTeamA = 0;
    document.getElementById("teamA").innerHTML = pressTeamA;
}

//These are the functions for Team B
var pressTeamB = 0;
// Adds 5 points to the scoreboard for Team B
function teamB5() {
    pressTeamB += 5;
    document.getElementById("teamB").innerHTML = pressTeamB;
}
// Adds 4 points to the scoreboard for Team B
function teamB4() {
    pressTeamB += 4;
    document.getElementById("teamB").innerHTML = pressTeamB;
}
// Adds 3 points to the scoreboard for Team B
function teamB3() {
    pressTeamB += 3;
    document.getElementById("teamB").innerHTML = pressTeamB;
}
// Adds 2 points to the scoreboard for Team B
function teamB2() {
    pressTeamB += 2;
    document.getElementById("teamB").innerHTML = pressTeamB;
}
// Adds 1 point to the scoreboard for Team B
function teamB1() {
    pressTeamB += 1;
    document.getElementById("teamB").innerHTML = pressTeamB;
}
// Resets the score of Team B to zero!
function resetB() {
    pressTeamB = 0;
    document.getElementById("teamB").innerHTML = pressTeamB;
}