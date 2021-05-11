let playerScores = [0,0];
let roundScore = 0;
let currentPlayer = 0;
let diceRoll = 0;

function diceValue() {
  //This function will generate the dice value of the currentPlayer
   // One dice goes up to 6
  diceRoll = Math.floor( Math.random() * 6 );
  //console.log("You rolled" + diceRoll);
  console.log("You rolled", diceRoll)
  }
  //diceValue()
  //console.log("You rolled", diceRoll)
  
  function updateScore() {
    //This function will change the score of the currentplayer
    roundScore += diceRoll
    
    
    
    
    
    //roll dice and add diceRoll to roundScore
    //else if player chose hold switchPlayers
  }

  function finalScore(){
    //This will store the round score and add it to the global score
    //playerScores[0] = 5
    playerScores[currentPlayer] = roundScore
    
    
    }

    function switchPlayers(){
      if (currentPlayer === 0){
          currentPlayer = 1
      }else{
        currentPlayer = 0
      }
      console.log(`Current player is ${currentPlayer}`)
    }