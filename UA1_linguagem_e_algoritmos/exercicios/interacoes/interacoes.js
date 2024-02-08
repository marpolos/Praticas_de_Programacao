alert("Saudações, usuário");
var isOk = confirm("Tudo bem? ");

if (isOk) {
    window.alert("Que ótimo!");
}
else window.alert("Poxa, sinto muito.");

var wePlay = window.confirm("Vamos jogar adivinhação??");


if (wePlay) {
    var n = prompt("Qual número estou pensando entre 0 e 10 ?");
    var comparacao = parseInt(n) == 1
    comparacao == 1 ? alert("Acertou!") : alert("Errou!");
}
else {
    alert("Tudo bem.");
}