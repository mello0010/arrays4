let nomes = [], alturas = [];
let continuar = true, i = 0;

while (continuar) {
    nomes[i] = prompt("Digite o nome da " + (i + 1) + "ª pessoa:");
    alturas[i] = parseFloat(prompt("Digite a altura de " + nomes[i] + " (ex: 1.75):"));
    
    continuar = confirm("Deseja cadastrar mais alguém?");
    if (continuar) i++;
}

let maiorAlt = alturas[0], menorAlt = alturas[0];
let nomeMaior = nomes[0], nomeMenor = nomes[0];

for (let j = 1; j <= i; j++) {
    if (alturas[j] > maiorAlt) {
        maiorAlt = alturas[j];
        nomeMaior = nomes[j];
    }
    if (alturas[j] < menorAlt) {
        menorAlt = alturas[j];
        nomeMenor = nomes[j];
    }
}