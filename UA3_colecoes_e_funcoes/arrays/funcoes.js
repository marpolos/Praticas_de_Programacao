function calcular(operacao){
    console.log("Operação: " + operacao);
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);

    switch(operacao){
        case 'somar':
            operation = a + b;
            break;
        case 'subtrair':
            operation = a - b;
            break;
        case 'multiplicar':
            operation = a * b;
            break;
        case 'dividir':
            operation = a / b;
            break;
    }

    document.getElementById("resultado").innerHTML = operation;
}