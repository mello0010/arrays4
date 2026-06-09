let nomes = [], sexos = [], salarios = [];
let resultado = "Funcionárias (mulheres com salário > R$5000):\n";

for (let i = 0; i < 5; i++) {
    nomes[i] = prompt("Nome do " + (i + 1) + "º funcionário:");
    sexos[i] = prompt("Sexo (M/F):").toUpperCase();
    salarios[i] = parseFloat(prompt("Salário:"));

    if (sexos[i] === "F" && salarios[i] > 5000) {
        resultado += "\n- " + nomes[i] + ": R$ " + salarios[i];
    }
}

alert(resultado);