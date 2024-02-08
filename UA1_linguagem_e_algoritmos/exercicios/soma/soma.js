function somarValores() {
    num_1 = document.getElementById("n1").value;
    n1 = parseInt(num_1);
    num_2 = document.getElementById("n2").value;
    n2 = parseInt(num_2);
    var sum = n1 + n2;
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = `Resultado: ${sum}`;
}