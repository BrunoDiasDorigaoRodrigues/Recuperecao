// Objetivo: Combinar repetição, entrada de dados e acumulador.
// Uma equipe registrou o tempo, em minutos, de seis atendimentos técnicos e deseja calcular a média.
// O programa deve:
// ☐ Criar um acumulador iniciado em zero.
// ☐ Usar um laço para solicitar exatamente 6 tempos.
// ☐ Somar cada valor ao acumulador.
// ☐ Calcular a média ao final.
// ☐ Exibir a soma dos tempos e a média.

const entrada = require('readline-sync');

let total = 0;
for(let tempo = 0; tempo <= 5; tempo++){
    const valor = entrada.questionInt("Digite o valor" + tempo + ":");
    total += valor;
};
const media = total /6;

console.log(`Soma total: ${total.toFixed(2)}`);
console.log(`Media: ${media.toFixed(2)}`);