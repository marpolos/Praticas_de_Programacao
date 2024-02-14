const n1 = Number(prompt("Digite a nota 1:"));
const n2 = Number(prompt("Digite a nota 2:"));
const n3 = Number(prompt("Digite a nota 3:"));
const n4 = Number(prompt("Digite a nota 4:"));

let soma = n1 + n2 + n3 + n4;
console.log("Soma: ", soma);

let media = soma / 4;
console.log("Média: ", media);

if (media >= 7){
    console.log("Aprovado");
    alert("Aprovado");
}
else if (media < 7 && media <= 5) {
    console.log("Recuperação");
    alert("Recuperação");
}
else {
    console.log("Reprovado"); 
    alert("Reprovado"); 
}
