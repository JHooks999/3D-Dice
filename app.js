
scores = [0,0];
let roundScore = 0
let activePlayer = 0;
let gameActive = true

resetGame();
//document.getElementById('score-0').innerHTML = 0;
//document.getElementById('score-1').innerHTML = 0;
//document.getElementById('current-0').innerHTML = 0;
//document.getElementById('current-1').innerHTML = 0;

function diceValue(){
  //This function will generate the dice value of the currentPlayer
   // One dice goes up to 6
  
  
diceRoll = Math.floor( Math.random() * 6 ) + 1;
console.log(diceRoll)
//fix vars
  let img1 = document.getElementById('dice-1.png');
  let img2 = document.getElementById('dice-2.png');
  let img3 = document.getElementById('dice-3.png');
  let img4 = document.getElementById('dice-4.png');
  let img5 = document.getElementById('dice-5.png');
  let img6 = document.getElementById('dice-6.png');
//imgArr[i].style.dispaly = "none"
  let imgArr = [img1,img2,img3,img4,img5,img6];
  console.log(img1);
  imgArr[0].style.display = "none";
  imgArr[1].style.display = "none";
  imgArr[2].style.display = "none";
  imgArr[3].style.display = "none";
  imgArr[4].style.display = "none";
  imgArr[5].style.display = "none";
//try switch statement fix unnec spaces
  


if(diceRoll ==1 ){
     imgArr[0].style.display = "block";
  
  }
  else if(diceRoll == 2){

    imgArr[1].style.display = "block";
    
  }

  else if(diceRoll == 3){
 
    imgArr[2].style.display = "block";
   
  }

  else if(diceRoll == 4){
   
    imgArr[3].style.display = "block";
  
  }

  else if(diceRoll == 5){

    imgArr[4].style.display = "block";
   
  }

  else {
  

    imgArr[5].style.display = "block";


  } 
 
  if(diceRoll !== 1){
    roundScore += diceRoll;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;  

  

  }
  else {
      
      switchPlayers();
  }
}


function updateScore(){
    scores[activePlayer] += roundScore;
    
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
  if (scores[activePlayer] >= 50) {
      document.querySelector('#name-' + activePlayer).textContent = " Winner!";
      document.querySelector('.dice').style.display = "none";
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  } else {
      switchPlayers();
  }
}  
 

function switchPlayers(){
  document.querySelector('.dice').style.display = 'none';
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}

function checkWin(){
  if (scores[activePlayer] >= 50) {
    document.querySelector('#name-' + activePlayer).textContent = " Winner!";
  }else{
    switchPlayers()
  }
}


function resetGame(diceValue){
  scores = [0,0];
  roundScore = 0
  activePlayer = 0;
  document.getElementById('score-0').innerHTML = 0;
  document.getElementById('score-1').innerHTML = 0;
  document.getElementById('current-0').innerHTML = 0;
  document.getElementById('current-1').innerHTML = 0;
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}




document.querySelector('.btn-roll').addEventListener('click',diceValue)
document.querySelector('.btn-hold').addEventListener('click',updateScore)
document.querySelector('btn.new').addEventListener('click', resetGame)

  