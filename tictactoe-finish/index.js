window.addEventListener("DOMContentLoaded", (event) => {

    const boardElement = document.getElementById("board");
    const statusElement = document.getElementById("status");
    const resetButton = document.getElementById("reset");

    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];
    let currentPlayer = "X";
    let isGameOver = false;
      
    // Create the game board
    function createBoard() {
    boardElement.innerHTML = ""; // Clear the board
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
        const cell = document.createElement("div");
        cell.className = "h-16 w-16 flex items-center justify-center border bg-white text-xl font-bold cursor-pointer";
        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.addEventListener("click", handleCellClick);
        cell.textContent = board[row][col];
        boardElement.appendChild(cell);
        }
    }
    }
      
    // Handle cell clicks
    function handleCellClick(event) {
    if (isGameOver) return;
    const row = event.target.dataset.row;
    const col = event.target.dataset.col;
    
    if (board[row][col] === "") {
        board[row][col] = currentPlayer;
        event.target.textContent = currentPlayer;
    
        if (checkWinner(row, col)) {
        statusElement.textContent = `Player ${currentPlayer} wins!`;
        isGameOver = true;
        } else if (isBoardFull()) {
        statusElement.textContent = "It's a draw!";
        isGameOver = true;
        } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusElement.textContent = `Player ${currentPlayer}'s turn`;
        }
    }
    }
    
    // Check if the board is full
    function isBoardFull() {
    return board.flat().every((cell) => cell !== "");
    }
    
    // Check for a winner
    function checkWinner(row, col) {
    row = parseInt(row);
    col = parseInt(col);
    
    // Check row
    if (board[row].every((cell) => cell === currentPlayer)) return true;
    
    // Check column
    if (board.every((r) => r[col] === currentPlayer)) return true;
    
    // Check diagonal
    if (
        row === col &&
        board.every((_, index) => board[index][index] === currentPlayer)
    )
        return true;
    
    // Check anti-diagonal
    if (
        row + col === 2 &&
        board.every((_, index) => board[index][2 - index] === currentPlayer)
    )
        return true;
    
    return false;
    }
      
    // Reset the game
    function resetGame() {
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];
    currentPlayer = "X";
    isGameOver = false;
    statusElement.textContent = "Player X's turn";
    createBoard();
    }

    resetButton.addEventListener("click", resetGame);
    resetGame();

});




