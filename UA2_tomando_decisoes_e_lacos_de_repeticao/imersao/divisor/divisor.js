function pegarDivisores() {
    let numero = document.getElementById("numero").value;
    let box = document.getElementsByTagName("section")[0];

    let fim = numero * 10;

    for (let i = numero; i <= fim; i++) {
        let calculo = i % numero;
        console.log(calculo, numero, i, numero * i, numero % i, numero / i);
        if (calculo == 0) {
            box.append(i);
            box.append(document.createElement("hr"));
        }
    }
}