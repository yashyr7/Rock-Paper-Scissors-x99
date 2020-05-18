var playerOneMoveOneType;
var playerOneMoveTwoType;
var playerOneMoveThreeType;

var playerOneMoveOneValue;
var playerOneMoveTwoValue;
var playerOneMoveThreeValue;

var playerTwoMoveOneType;
var playerTwoMoveTwoType;
var playerTwoMoveThreeType;

var playerTwoMoveOneValue;
var playerTwoMoveTwoValue;
var playerTwoMoveThreeValue;

function setPlayerMoves(player, move1, value1, move2, value2, move3, value3) {
  if((player === "Player One" || player === "Player Two") &&
     (move1 === "rock" || move1 === "paper" || move1 === "scissors") &&
     (move2 === "rock" || move2 === "paper" || move2 === "scissors") &&
     (move3 === "rock" || move3 === "paper" || move3 === "scissors") &&
     value1 >= 1 && value1 <= 99 && value2 >= 1 && value2 <= 99 && value3 >= 1 && value3 <= 99 &&
     value1 + value2 + value3 <= 99) {
      if(player === "Player One") {
        playerOneMoveOneType = move1;
        playerOneMoveOneValue = value1;
        playerOneMoveTwoType = move2;
        playerOneMoveTwoValue = value2;
        playerOneMoveThreeType = move3;
        playerOneMoveThreeValue = value3;
      } else {
        playerTwoMoveOneType = move1;
        playerTwoMoveOneValue = value1;
        playerTwoMoveTwoType = move2;
        playerTwoMoveTwoValue = value2;
        playerTwoMoveThreeType = move3;
        playerTwoMoveThreeValue = value3;
      }
  }
}

function getRoundWinner(round_number) {
  if(round_number === 1 || round_number === 2 || round_number === 3) {
    if(round_number === 1 && playerOneMoveOneType && playerTwoMoveOneType &&
       playerOneMoveOneValue && playerTwoMoveOneValue) {
      if(playerOneMoveOneType === "rock" && playerTwoMoveOneType === "scissors") {
        return "Player One";
      } else if(playerOneMoveOneType === "paper" && playerTwoMoveOneType === "rock") {
        return "Player One";
      } else if(playerOneMoveOneType === "scissors" && playerTwoMoveOneType === "paper") {
        return "Player One";
      } else if(playerTwoMoveOneType === "rock" && playerOneMoveOneType === "scissors") {
        return "Player Two";
      } else if(playerTwoMoveOneType === "paper" && playerOneMoveOneType === "rock") {
        return "Player Two";
      } else if(playerTwoMoveOneType === "scissors" && playerOneMoveOneType === "paper") {
        return "Player Two";
      } else if(playerOneMoveOneValue > playerTwoMoveOneValue) {
        return "Player One";
      } else if(playerOneMoveOneValue < playerTwoMoveOneValue) {
        return "Player Two";
      } else {
        return "Tie";
      }
    } else if(round_number === 2 && playerOneMoveTwoType && playerTwoMoveTwoType &&
              playerOneMoveTwoValue && playerTwoMoveTwoValue) {
      if(playerOneMoveTwoType === "rock" && playerTwoMoveTwoType === "scissors") {
        return "Player One";
      } else if(playerOneMoveTwoType === "paper" && playerTwoMoveTwoType === "rock") {
        return "Player One";
      } else if(playerOneMoveTwoType === "scissors" && playerTwoMoveTwoType === "paper") {
        return "Player One";
      } else if(playerTwoMoveTwoType === "rock" && playerOneMoveTwoType === "scissors") {
        return "Player Two";
      } else if(playerTwoMoveTwoType === "paper" && playerOneMoveTwoType === "rock") {
        return "Player Two";
      } else if(playerTwoMoveTwoType === "scissors" && playerOneMoveTwoType === "paper") {
        return "Player Two";
      } else if(playerOneMoveTwoValue > playerTwoMoveTwoValue) {
        return "Player One";
      } else if(playerOneMoveTwoValue < playerTwoMoveTwoValue) {
        return "Player Two";
      } else {
        return "Tie";
      }
    } else if(round_number === 3 && playerOneMoveThreeType && playerTwoMoveThreeType &&
              playerOneMoveThreeValue && playerTwoMoveThreeValue) {
      if(playerOneMoveOneType === "rock" && playerTwoMoveOneType === "scissors") {
        return "Player One";
      } else if(playerOneMoveThreeType === "paper" && playerTwoMoveThreeType === "rock") {
        return "Player One";
      } else if(playerOneMoveThreeType === "scissors" && playerTwoMoveThreeType === "paper") {
        return "Player One";
      } else if(playerTwoMoveThreeType === "rock" && playerOneMoveThreeType === "scissors") {
        return "Player Two";
      } else if(playerTwoMoveThreeType === "paper" && playerOneMoveThreeType === "rock") {
        return "Player Two";
      } else if(playerTwoMoveThreeType === "scissors" && playerOneMoveThreeType === "paper") {
        return "Player Two";
      } else if(playerOneMoveThreeValue > playerTwoMoveThreeValue) {
        return "Player One";
      } else if(playerOneMoveThreeValue < playerTwoMoveThreeValue) {
        return "Player Two";
      } else {
        return "Tie";
      }
    }
  }
  return null;
}

function getGameWinner() {
  var playerOneScore = 0;
  var playerTwoScore = 0;
  if(getRoundWinner(1) === "Player One") {
    playerOneScore++;
  } else if(getRoundWinner(1) === "Player Two") {
    playerTwoScore++;
  } else if(getRoundWinner(1) === null) {
    return null;
  }
  if(getRoundWinner(2) === "Player One") {
    playerOneScore++;
  } else if(getRoundWinner(2) === "Player Two") {
    playerTwoScore++;
  } else if(getRoundWinner(2) === null) {
    return null;
  }
  if(getRoundWinner(3) === "Player One") {
    playerOneScore++;
  } else if(getRoundWinner(3) === "Player Two") {
    playerTwoScore++;
  } else if(getRoundWinner(3) === null) {
    return null;
  }
  if(playerOneScore > playerTwoScore) {
    return "Player One";
  } else if(playerOneScore < playerTwoScore) {
    return "Player Two";
  } else if(playerOneScore === playerTwoScore) {
    return "Tie";
  }
  return null;
}

function setComputerMoves() {
  var val = Math.floor((Math.random() * 3) + 1);
  console.log(val);
  if(val === 1) {
    playerTwoMoveOneType = "rock";
  } else if(val === 2) {
    playerTwoMoveOneType = "paper";
  } else if(val === 3) {
    playerTwoMoveOneType = "scissors";
  }

  val = Math.floor((Math.random() * 3) + 1);
  console.log(val);
  if(val === 1) {
    playerTwoMoveTwoType = "rock";
  } else if(val === 2) {
    playerTwoMoveTwoType = "paper";
  } else if(val === 3) {
    playerTwoMoveTwoType = "scissors";
  }

  val = Math.floor((Math.random() * 3) + 1);
  console.log(val);
  if(val === 1) {
    playerTwoMoveThreeType = "rock";
  } else if(val === 2) {
    playerTwoMoveThreeType = "paper";
  } else if(val === 3) {
    playerTwoMoveThreeType = "scissors";
  }

  playerTwoMoveOneValue = Math.floor((Math.random() * 99) + 1);
  playerTwoMoveTwoValue = Math.floor((Math.random() * (99 - playerTwoMoveOneValue)) + 1);
  playerTwoMoveThreeValue = 99 - playerTwoMoveOneValue - playerTwoMoveTwoValue;
}