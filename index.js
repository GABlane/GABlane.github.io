const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let currentPlayer = 'X';

function printBoard() {
    console.log('  0 1 2');
    board.forEach((row, index) => {
        console.log(index, row.join('|'));
    });
}

function isWin(player) {
    // Check rows, columns, and diagonals
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) return true;
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true;
    }
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true;
    return false;
}

function isDraw() {
    return board.flat().every(cell => cell !== ' ');
}

function makeMove(row, col) {
    if (board[row][col] === ' ') {
        board[row][col] = currentPlayer;
        if (isWin(currentPlayer)) {
            printBoard();
            console.log(`Player ${currentPlayer} wins!`);
            rl.close();
        } else if (isDraw()) {
            printBoard();
            console.log('The game is a draw!');
            rl.close();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            play();
        }
    } else {
        console.log('Invalid move, try again.');
        play();
    }
}

function play() {
    printBoard();
    rl.question(`Player ${currentPlayer}, enter your move (row and column): `, (input) => {
        const [row, col] = input.split(' ').map(Number);
        if (row >= 0 && row < 3 && col >= 0 && col < 3) {
            makeMove(row, col);
        } else {
            console.log('Invalid input, try again.');
            play();
        }
    });
}

play();