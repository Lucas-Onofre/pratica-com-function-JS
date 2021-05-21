//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

operacoes = (a, b) => {
    soma = a + b
    mult = a * b
    sub = a - b
    console.log(`Soma: ${soma}`)
    console.log(`Multiplicação: ${mult}`)
    console.log(`Subtração: ${sub}`)
}

operacoes(3, 2)