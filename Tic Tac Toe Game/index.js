let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".Reset");
let newgamebtn = document.querySelector(".new-btn")
let messcontainer = document.querySelector(".mess-container")
let message = document.querySelector(".msg")

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];  
const resetGame =() =>{
    turnO = true;
    boxesenable();
    messcontainer.classList.add("hide")
}

boxes.forEach((box) => {
  box.addEventListener("click", () => { 
    box.innerText = "X";
    box.style.color = "black";
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const boxesDisable = () =>{
    for(let box of boxes){
        box.disabled = true
    }
}

const showWinner = (winner) =>{
    message.innerText =  `Congratulations Winner is ${winner}`
    messcontainer.classList.remove("hide");
    boxesDisable();
} 
const boxesenable = () =>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = "";
    }
}


const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
         showWinner(pos1Val);
      }
    }
  }   
};

newgamebtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);