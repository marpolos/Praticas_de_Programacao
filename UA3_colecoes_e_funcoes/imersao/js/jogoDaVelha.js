let tabuleiro;

let board;

let jogador;;

let aviso;
let linha;
let coluna;

function Iniciar() {
    tabuleiro = [];
    board = document.getElementById("board");
    aviso = document.getElementById("aviso");
    jogador = 1;

    for(let i = 0; i<3; i++){
        tabuleiro[i] = [];
        for(let j = 0; j < 3; j ++){
            tabuleiro[i][j] = 0;
        }
    }
    console.table(tabuleiro);
    Exibir();
}

function Exibir() {
    let table = '<table cellPadding="50" border="1">';
    for(let i = 0; i<3; i++){
        table += '<tr>';
        for(let j = 0; j < 3; j ++){
            let marcador;
            switch(tabuleiro[i][j]){
                case 1:
                    marcador = 'X';
                    break;
                case -1:
                    marcador = 'O';
                    break;
                default:
                    marcador = '';
            }
            table += '<td>' + marcador + '</td>';
        }
        table += '</tr>';
    }
    
    table += '</table>';
    board.innerHTML = table;
}

function Jogar() {
    aviso.innerHTML = "Vez do jogador " + NumeroJogador();
    linha = document.getElementById("linha").value - 1;
    coluna = document.getElementById("coluna").value - 1;
    
    if (tabuleiro[linha][coluna] == 0) {
        tabuleiro[linha][coluna] = NumeroJogador() == 1 ? 1 : -1;
        jogador++;
        Exibir();
    } else {
        aviso.innerHTML = "Posição já ocupada!";
    }
    Exibir();
    Checar();
}

function Checar() {
    // linhas
    for(let i = 0; i <= 2; i++){
        let somaLinha = 0;
        somaLinha = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2];
        if(somaLinha == 3 || somaLinha == -3){
            aviso.innerHTML = "Jogador " + (jogador - 1) + " venceu!";
        }
    }

    // colunas
    for(let j = 0; j <= 2; j++){
        let somaColuna = 0;
        somaColuna = tabuleiro[0][j] + tabuleiro[1][j] + tabuleiro[2][j];
        if(somaColuna == 3 || somaColuna == -3){
            aviso.innerHTML = "Jogador " + (jogador - 1) + " venceu!";
        }
    }

    // diagonais
    let somaDiagonal1 = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2];
    let somaDiagonal2 = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0];

    if(somaDiagonal1 == 3 || somaDiagonal1 == -3){
        aviso.innerHTML = "Jogador " + (jogador - 1) + " venceu!";
    }
    if(somaDiagonal2 == 3 || somaDiagonal2 == -3){
        aviso.innerHTML = "Jogador " + (jogador - 1) + " venceu!";
    }

}

function NumeroJogador() {
    console.log("Jogador: " + jogador);
    jogador = (jogador % 2) + 1;
    return jogador;
}