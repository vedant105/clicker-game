const circle = document.getElementById('circle');
const startBtn = document.getElementById('startBtn');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const gameOverText = document.getElementById('gameOver');

let score = 0;
let timeLeft = 30;
let gameInterval, moveInterval;

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  gameOverText.textContent = '';
  circle.style.display = 'block';
  moveCircle();

  gameInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft === 0) {
      endGame();
    }
  }, 1000);

  moveInterval = setInterval(moveCircle, 800);
}

function moveCircle() {
  const x = Math.random() * (window.innerWidth - 60);
  const y = Math.random() * (window.innerHeight - 60);
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
}

function endGame() {
  clearInterval(gameInterval);
  clearInterval(moveInterval);
  circle.style.display = 'none';
  gameOverText.textContent = `🎉 Game Over! Your Score: ${score}`;
}

circle.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  moveCircle();
});

startBtn.addEventListener('click', startGame);
