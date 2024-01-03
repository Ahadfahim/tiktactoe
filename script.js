let playerText = document.getElementById("playerText");
let winText = document.getElementById("winText");
let restartButton = document.getElementById("restartBtn");
let boxes = document.querySelectorAll(".box");
let gameContainer = document.getElementById("dp");
let turn0 = true;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked!");
    if (turn0) {
      box.innerText = "X";
      turn0 = false;
    } else {
      box.innerText = "O";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});


const checkWinner = () => {
  for (let pattern of winningCombos) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos1 === pos3) {
        console.log(pos1 + " has won!");
        winText.innerText = pos1 + " has won!";
        for (let box of boxes) {
            box.disabled = true;
        }
        gameContainer.style.display = "none";
        document.body.classList.add("overlay");
        winText.addEventListener("click", () => {
            document.body.classList.remove("overlay");
            gameContainer.style.display = "flex";
            rstGame();
        });
      }
    }
  }
};

const rstGame = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    winText.innerText = ""; 
    turn0 = true;
};

restartButton.addEventListener("click", rstGame);