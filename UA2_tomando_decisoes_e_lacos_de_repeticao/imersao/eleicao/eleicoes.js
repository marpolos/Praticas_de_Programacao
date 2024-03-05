
function calcularIdade() {
    let anoEleitor = document.getElementById("ano-nascimento").value;
    const date = new Date();
    const ano = date.getFullYear();

    let idadeEleitor = ano - anoEleitor;
    console.log(idadeEleitor);
    let mensagem = "";
    if (idadeEleitor < 16) {
        mensagem = "Não eleitor devido a idade";
    }
    else if (idadeEleitor >= 16 && idadeEleitor < 18 || (idadeEleitor >= 65)) {
        mensagem = "Eleitor facultativo";
    }
    else {
        mensagem = "Eleitor obrigatório";
    }

    let campoMensagem = document.getElementById("mensagem");
    campoMensagem.innerHTML = mensagem;
}