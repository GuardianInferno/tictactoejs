const boardElement = document.getElementById("board")
const statusElement = document.getElementById("status")
const resetElement = document.getElementById("reset")

let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

let currentPlayer = "X"
let isGameOver = false

function createBoard(){
    for(let row = 0; row < board.length; row++){
        for(let el = 0; el < board[row].length; el++){
            const cell = document.createElement("div")
            cell.className = "h-16 w-16 flex items-center justify-center border bg-white text-xl font-bold cursor-pointer"
            cell.dataset.row = row
            cell.dataset.col = col
            cell.addEventListener("click", handleCellClick) // we havent created handleCellClick yet
            cell.textContent = board[row][col]
            boardElement.appendChild(cell)
        }
    }
}