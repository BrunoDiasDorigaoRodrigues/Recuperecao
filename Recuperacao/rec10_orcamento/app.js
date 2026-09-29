// Objetivo: Separar regras de negócio em um módulo e utilizá-las no programa principal.
// Uma assistência técnica precisa calcular o orçamento de um serviço utilizando dois arquivos JavaScript.
// O programa deve:
// ☐ Criar uma pasta chamada rec10_orcamento.
// ☐ Criar o arquivo funcoesOrcamento.js.
// ☐ Criar calcularMaoDeObra(horas), considerando R$ 95,00 por hora.
// ☐ Criar calcularTotal(valorMateriais, horas), somando materiais e mão de obra.
// ☐ Criar verificarDesconto(total), retornando "DESCONTO DE 10%" quando total >= R$ 1000,00 e "SEM DESCONTO" nos demais casos.
// ☐ Exportar as funções com module.exports.
// ☐ Criar o arquivo app.js.
// ☐ No app.js, importar readline-sync e o módulo com require().
// ☐ Solicitar nome do cliente, valor dos materiais e horas de serviço.
// ☐ Exibir relatório com cliente, materiais, mão de obra, total e situação do desconto.

const entrada = require("readline-sync");
const funcoes = require('./funcoesOrcamento');

const nome = entrada.question("Digite o seu nome: ");
const valorMaterial = entrada.questionFloat("Digite o valor dos materiais: ");
const horas = entrada.questionInt("Digite a quantidade de horas do servico:  ")

const maoObra = funcoes.calcularMaoDeObra(horas);
const total = funcoes.calcularTotal(valorMaterial, horas , nome);
const desconto = funcoes.verificarDesconto(valorMaterial);

const Desconto = total * 10 / 100 
const totalDesconto = total - Desconto

console.log(`nome do cliente: ${nome}`)
console.log(`mao de obra: ${maoObra}`)
console.log(`total: ${total}`)
console.log(`desconto: ${desconto}`)
if (total >=1000) {
    console.log(`O total com o desconto ficou: ${totalDesconto.toFixed(2)}`);
}