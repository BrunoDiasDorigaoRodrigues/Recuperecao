// Um almoxarifado precisa cadastrar quatro ferramentas. Cada ferramenta possui nome, quantidade disponível e quantidade mínima.
// O programa deve:
// ☐ Criar um array vazio para armazenar as ferramentas.
// ☐ Cadastrar 4 ferramentas usando um laço.
// ☐ Criar um objeto para cada ferramenta com nome, quantidade e minimo.
// ☐ Adicionar cada objeto ao array com push().
// ☐ Percorrer o array após o cadastro.
// ☐ Quando quantidade < minimo, exibir "REPOR".
// ☐ Caso contrário, exibir "ESTOQUE SUFICIENTE".
// ☐ Apresentar nome, quantidade, mínimo e siturec09_aproveitamento.jsação de cada ferramenta.
const entrada = require('readline-sync')

const materiais = [];

for(let i = 0; i<=3; i++){
    const material = {
        nome : entrada.question(`Digite o nome do produto ${i+1}: `),
        quantidade: entrada.questionInt(`Digite a quantidade do produto ${i+1}: `),
        estoqueMinimo: entrada.questionInt(`Digite a quantidade minima do produto ${i+1}: `)
    };
    materiais.push(material);

}

console.log("--- RELATORIO FINAL ---");

for (let i = 0; i < materiais.length; i++){
    const produto = materiais[i];

    let situacao;
    if (produto.quantidade < produto.estoqueMinimo){
        situacao = "REPOR";
    }else{
        situacao = "ESTOQUE SUFICIENTE";
    }
    console.log(`Material: ${produto.nome}`);
    console.log(`Quantidade: ${produto.quantidade}`);
    console.log(`Estoque Minimo: ${produto.estoqueMinimo}`);
    console.log(`Situacao: ${situacao}`);
    console.log("-".repeat(20));
}