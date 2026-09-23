// O nível de óleo de uma máquina deve permanecer entre 40% e 80%, inclusive. Fora desse intervalo, a máquina precisa de inspeção
// O programa deve:
// ☐ Solicitar o nível de óleo em porcentagem.
// ☐ Usar if/else para verificar se o nível está dentro do intervalo.
// ☐ Exibir "NÍVEL NORMAL" quando estiver entre 40 e 80.
// ☐ Exibir "INSPEÇÃO NECESSÁRIA" nos demais casos.
// ☐ Exibir também o valor informado.

const entrada = require('readline-sync');

const nivelDeOleo = entrada.questionInt("Digite o nivel de oleo presente :");

if (nivelDeOleo < 40){
    console.log(`O valor informado foi ${nivelDeOleo}\n===RESULTADO FINAL===\nINSPEÇÃO NECESSÁRIA`);
} else if (nivelDeOleo > 80){
    console.log(`O valor informado foi ${nivelDeOleo}\n===RESULTADO FINAL===\nINSPEÇÃO NECESSÁRIA`);
}else if (nivelDeOleo >= 40){
    console.log(`O valor informado foi ${nivelDeOleo}\n===RESULTADO FINAL===\nNÍVEL NORMAL`);
}else if (nivelDeOleo >= 80){
    console.log(`O valor informado foi ${nivelDeOleo}\n===RESULTADO FINAL===\nNÍVEL NORMAL`);
} else {
    console.log(`O valor informado foi ${nivelDeOleo}\n===RESULTADO FINAL===\nINSPEÇÃO NECESSÁRIA`);
}

