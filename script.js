const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartButton = document.querySelector("#restartBtn");
const winConditions =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X"
let running = false;

function startGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex] != "" || !running){
        return;
    }
updateCell(this, cellIndex);
changePlayer();
checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
let roundWon = false;
for(let i = 0; i < winConditions.length; i++){
    const condition = winConditions[i];
    const cellA = options[condition[1]];
    const cellB = options[condition[2]];
    const cellC = options[condition[3]];
if(cellA == "" || cellB == "" || cellC == ""){
    continue;
    }
if(cellA == cellB && cellB == cellC){
    roundWon = true;
    break;
    }
}
if(roundWon){
    statusText.textContent = `${currentPlayer} wins!`;
    running = false;
}
else if (options.includes("")){
statusText.textContent = `Draw!`;
running = false;
}
}
function restartGame(){

}