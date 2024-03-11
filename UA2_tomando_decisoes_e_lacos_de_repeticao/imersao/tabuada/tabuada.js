function calcular() {
    let multiplicador = document.getElementById("multiplicador").value;
    let qtd = document.getElementById("qtd").value;
    let caixaTabuada = document.getElementsByClassName("tabuada-box")[0];
    console.log(qtd, typeof(qtd));
    if (qtd != "") {
        var i = 0;
        do {
            let calculo = multiplicador * i;

            let linha = document.createElement("p");
            linha.innerText = `${multiplicador} * ${i} = ${calculo}`;
            caixaTabuada.appendChild(linha);
            i++;
        } while (i <= qtd)
    }
    else {
        for (let i = 0; i <= 10; i++) {
            let calculo = multiplicador * i;
            let linha = document.createElement("p");
            linha.innerText = `${multiplicador} * ${i} = ${calculo}`;
            caixaTabuada.appendChild(linha);
        }
        console.log("Aqui 3");
    }
}

function limparBoxTabuada() {
    let caixaTabuada = document.getElementsByClassName("tabuada-box")[0];
    caixaTabuada.innerHTML = "";
}