let currentPlayerHTML = document.getElementById('current_player');
let tableBody = document.getElementById('table_body');
let currentPlayer = '';
let turn;

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