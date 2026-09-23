// Uma máquina de embalagem produz uma quantidade fixa de caixas por hora. Crie um programa que calcule quantas caixas serão produzidas durante um dia de trabalho.
// O programa deve:
// ☐ Criar uma variável para a quantidade de caixas produzidas por hora.
// ☐ Criar uma variável para a quantidade de horas trabalhadas no dia.
// ☐ Calcular a produção total.
// ☐ Exibir uma frase informando caixas por hora, horas trabalhadas e total produzido.

const entrada = require('readline-sync')

const qntd = entrada.questionInt("Digite a quantidade de caixas :");
const horas = entrada.questionInt("Digite a quantidade de horas trabalhadas :");

const total =   qntd * horas;

console.log("===RELATORIO FINAL===")
console.log(`Foram produzidas ${qntd} caixas, durante ${horas} horas.`)
console.log(`O Total foram de ${total} caixas produzidas!`)