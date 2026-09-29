function calcularMaoDeObra(horas){
    const valorHoras = 95.00
    return horas * valorHoras
}

function calcularTotal(valorMateriais, horas){
    return valorMateriais + calcularMaoDeObra(horas)
}

function verificarDesconto(total){
    if (total >= 1000){
    return "DESCONTO DE 10%"
    }else{
        return "SEM DESCONTO"
    }
}
module.exports = {
    calcularMaoDeObra,
    calcularTotal,
    verificarDesconto
}