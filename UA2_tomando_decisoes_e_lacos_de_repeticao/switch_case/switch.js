let cargo = prompt("Qual o cargo? ");
cargo = cargo.toLowerCase();
let salario = Number(prompt("Qual o salário: "));

switch (cargo) {
    case "estagiario": 
        salario *= 2;
        break;
    case "analista": 
        salario *= 1.5;
        break;
    case "gerente": 
        salario *= 1.3;
        break;
    case "presidente": 
        salario *= 1.1;
        break;
    default:
        alert("Escolha um cargo válido.");
}

alert("O novo salário é ", salario);