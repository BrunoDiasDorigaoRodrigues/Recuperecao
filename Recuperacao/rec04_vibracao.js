// Objetivo: Utilizar if, else if e else em uma regra de negócio.
// Um sensor mede o nível de vibração de um equipamento em mm/s.
// O programa deve:
// ☐ Até 3 mm/s: situação ESTÁVEL.
// ☐ Acima de 3 até 6 mm/s: situação ATENÇÃO.
// ☐ Acima de 6 mm/s: situação CRÍTICA.
// ☐ Solicitar o valor da vibração pelo terminal.
// ☐ Exibir o valor informado e a classificação

const entrada = require('readline-sync');

const valor = entrada.questionFloat("Digite o valor de vibracao desejado :");

if (valor <= 3){
    console.log(`O valor informado foi ${valor}mm/s e a classificação e ESTAVEL`);
} else if (valor > 3){
    console.log(`O valor informado foi ${valor}mm/s e a classificação e ATENCAO`);
} else if (valor <= 6){
    console.log(`O valor informado foi ${valor}mm/s e a classificação e ATENCAO`);
} else {
    console.log(`O valor informado foi ${valor}mm/s e a classificação e CRITICA`);
}

