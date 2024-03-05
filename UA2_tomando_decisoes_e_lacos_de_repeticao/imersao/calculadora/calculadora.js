function calcular() {
    let numero_1 = document.getElementById("number_1").value;
    let numero_2 = document.getElementById("number_2").value;
    let operador = document.getElementById("operador").value;

    let campoResultado = document.getElementById("resultado");

    let resultado = 0;
    console.log(operador, numero_1, numero_2);
    switch (operador) {
        case "+":
            resultado = numero_1 + numero_2;
            break;
        case "-":
            resultado = numero_1 - numero_2;
            break;
        case "*":
            resultado = numero_1 * numero_2;
            break;
        case "/":
            resultado = numero_1 / numero_2;
                break;
        default:
            break;
    }

    campoResultado.innerText = resultado;
}