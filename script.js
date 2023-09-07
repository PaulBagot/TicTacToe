let currentPlayerHTML = document.getElementById('current_player');
let tableBody = document.getElementById('table_body');
let currentPlayer;
let table = [['', '', ''], ['', '', ''], ['', '', '']];
let turn;

/**
 * initialisation for the tictactoe game
 */
let initTictactoe = () => {
    let tableHTML = '';
    for(let i = 0; i < 3; i++) {
        tableHTML += "<tr>\n"
        for(let j = 0; j < 3; j++) {
            tableHTML += "<td><button id='button_"+i+"-"+j+"' onclick='game("+i+","+j+")'></button></td>\n";
        }
        tableHTML += "</tr>\n";
    }
    tableBody.innerHTML += tableHTML;
    currentPlayer = 1;
    turn = 1;
}

initTictactoe();

/**
 * change the current player to the next player
 * @returns the current player's symbole
 */
let nextPlayer = () => {
    if(currentPlayer == 1) {
        currentPlayer = 2;
        return 'X';
    }
    currentPlayer = 1;
    return 'O';
}

/**
 * say if the game is finished
 * @returns true if the game is finish
 */
let endGame = () => {
    for(let i = 0; i < 3; i++) {
        if(table[i][0] != '' && table[i][0] == table[i][1] && table[i][1] == table[i][2])
            return true;
    }
    for(let i = 0; i < 3; i++) {
        if(table[0][i] != '' && table[0][i] == table[1][i] && table[1][i] == table[2][i])
            return true;
    }
    if(table[0][0] != '' && table[0][0] == table[1][1] && table[1][1] == table[2][2])
        return true;
    if(table[0][2] != '' && table[0][2] == table[1][1] && table[1][1] == table[2][0])
        return true;
    return turn > 9;
}