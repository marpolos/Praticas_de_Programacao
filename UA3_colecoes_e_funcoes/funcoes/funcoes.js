function calcular(operacao){
    console.log("Operação: " + operacao);
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);

    let operation = 0;
    switch(operacao){
        case 'somar':
            operation = somar(a, b);
            break;
        case 'subtrair':
            operation = subtrair(a, b);
            break;
        case 'multiplicar':
            operation = multiplicar(a, b);
            break;
        case 'dividir':
            operation = a / b;
            break;
    }

    document.getElementById("resultado").innerHTML = operation;
}

const somar = function(a,b){
    return a + b;
}

const subtrair = (a, b) => {
    return a - b;
}

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => (
    a / b
);