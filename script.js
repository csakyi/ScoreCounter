const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const selectRounds = document.querySelector("#select");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    if (p1Score !== winningScore) {
      p1Display.textContent = p1Score += 1;
      if (p1Score === winningScore) {
        isGameOver = true;
        p1Display.style.color = "green";
        p2Display.style.color = "red";
      }
    }
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    if (p2Score !== winningScore) {
      p2Display.textContent = p2Score += 1;
      if (p2Score === winningScore) {
        isGameOver = true;
        p1Display.style.color = "red";
        p2Display.style.color = "green";
      }
    }
  }
});

selectRounds.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Score = 0;
  p2Score = 0;
  isGameOver = false;
  p1Display.style.color = "black";
  p2Display.style.color = "black";
}
