let i = 1;
function startContador() {
    
    let section = document.getElementById("contagem");
    
    while (i <= 10) {
        let numero = document.createElement("p");
        numero.innerText = i;
        section.appendChild(numero);
        i ++;
    }
}

function incrementarNumero() {
    let continuar = true;
    console.log(i);

    do {
        let section = document.getElementById("contagem");
        let numero = document.createElement("p");
        numero.innerText = i;
        section.appendChild(numero);
        i ++;
        continuar = confirm("Continuar a contagem?");
    } while (continuar);
}