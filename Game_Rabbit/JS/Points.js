
const btn_action_1 = document.querySelector('.btn_1').addEventListener('click', ScoreAdd);
const btn_action_2 = document.querySelector('.btn_2').addEventListener('click', ScoreAdd);
const btn_action_3 = document.querySelector('.btn_3').addEventListener('click', ScoreAdd);
const btn_action_4 = document.querySelector('.btn_4').addEventListener('click', ScoreAdd);

var score_number = document.querySelector('.number');
var score = 0;

function ScoreAdd(){
  score = score + 1;
  score_number.innerHTML = score;
}