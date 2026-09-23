// Objetivo: Cadastrar e percorrer dados armazenados em um array.
// Crie um programa para cadastrar seis setores de uma fábrica e, ao final, listar todos os setores numerados.
// O programa deve:
// ☐ Criar um array vazio.
// ☐ Usar um laço para solicitar 6 nomes de setores.
// ☐ Adicionar cada nome ao array usando push().
// ☐ Percorrer o array novamente após o cadastro.
// ☐ Exibir no formato "1 - Montagem", "2 - Qualidade" etc.
// ☐ Usar a propriedade length em pelo menos um dos laços.

const entrada = require('readline-sync');

const qntd = entrada.questionInt("Digite a quantidade de nomes para cada setor :")

const nomes = []

for (let i = 0; i < qntd; i++) {
    let nome = entrada.question(
        `Digite o nome ${i + 1}: `

    );

    nomes.push(nome);
}

console.log("\nnomes cadastrados:");
console.log(nomes) + `${i}`;
console.log(`Quantidade de nomes: ${nomes.length}`);
