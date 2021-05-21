//06) Elabore duas funções que recebem três parâmetros: capital inicial, 
//taxa de juros e tempo de aplicação. A primeira função retornará o 
//montante da aplicação financeira sob o regime de juros simples e a 
//segunda retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples (capitalInicial, taxa, tempo) {
    return (capitalInicial + (capitalInicial * taxa * tempo)).toFixed(2)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return (capitalInicial * (1 + taxa) ** tempo).toFixed(2)
}

console.log(jurosSimples(1000, 10/100, 3));
console.log(jurosCompostos(1200, 10/100, 3));