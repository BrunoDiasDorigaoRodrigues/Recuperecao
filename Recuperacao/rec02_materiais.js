// Uma equipe de manutenção precisa calcular o custo de um lote de peças de reposição.
// O programa deve:
// ☐ Importar a biblioteca readline-sync.
// ☐ Solicitar o nome da peça.
// ☐ Solicitar a quantidade comprada.
// ☐ Solicitar o preço unitário.
// ☐ Calcular o valor total da compra.
// ☐ Exibir um resumo contendo nome, quantidade, preço unitário e total.

const entrada = require('readline-sync');

const nomePeca = entrada.question("Digite o nome da peca :");
const qntd = entrada.questionFloat("Digite a quantidade desejada :");
const valorUnitario = entrada.questionFloat("Digite o valor unitario da peca :");

const total = qntd * valorUnitario;
console.log(`Você comprou um(a) ${nomePeca}`);
console.log(`A quantidade total foi de : ${qntd}`);
console.log(`E o valor total foi de ${total.toFixed(2)}`);
