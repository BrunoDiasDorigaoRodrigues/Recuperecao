// Uma indústria deseja calcular o percentual de aproveitamento de matéria-prima. O aproveitamento é calculado por (quantidade útil / quantidade total) × 100.
// O programa deve:
// ☐ Criar a função calcularAproveitamento(util, total) que retorne o percentual.
// ☐ Criar a função classificarAproveitamento(percentual).
// ☐ Classificação: 90% ou mais = "EXCELENTE"; de 75% a 89,99% = "ADEQUADO"; abaixo de 75% = "REVISAR PROCESSO".
// ☐ Solicitar quantidade total e quantidade útil pelo terminal.
// ☐ Chamar as duas funções.
// ☐ Exibir total, quantidade útil, percentual e classificação.

const entrada = require('readline-sync');

function calcularAproveitamento(util, total) {
    return (util / total) * 100;
}

function classificarAproveitamento(percentual) {
    if (percentual >=900) {
        return "EXCELENTE";
    } else if (percentual >= 750) {
        return "ADEQUADO"
    } else if (percentual <=899.99) {
        return "ADEQUADO"
    } else if (percentual <750) {
        return "REVISAR PROCESSO"
    } else {
        return "REVISAR PROCESSO"
    }
}

const qntdTotal = entrada.questionFloat(`Digite a quantidade total: `);
const qntdUtil = entrada.questionFloat(`Digite a quantidade util: `);

const calcular = calcularAproveitamento(qntdTotal, qntdUtil);
const classificacao = classificarAproveitamento(calcular);

console.log("\n--- RELATORIO FINAL ---");
console.log(`Total: ${qntdTotal}`);
console.log(`Quantidade util: ${qntdUtil}`);
console.log(`Percentual: ${calcular.toFixed(2)}%`);
console.log(`Classificacao: ${classificacao}`);
