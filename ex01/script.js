let idades = [];
let maiorIdade = 0;
let posicaoMaior = 0;

for (let i = 0; i < 4; i++) {
    let idadeInformada = parseInt(prompt("Digite a idade da " + (i + 1) + "º pessoa:"));
    idades[i] = idadeInformada;

    if (i === 0 || idadeInformada > maiorIdade) {
        maiorIdade = idadeInformada;
        posicaoMaior = i; 
    }
}

alert("A maior idade digitada foi: " + maiorIdade + " anos.\n" +
    "Ela foi digitada na posição: " + posicaoMaior);