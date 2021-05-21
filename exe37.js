//37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
//como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
//bem como a soma dos elementos.

function ProgressaoAritmetica(n, a1, r){
    let soma = 0
    for(let i = 0; i < n; i++){
        console.log(a1)
        soma += a1
        a1 += r
    }
    console.log(`Soma dos elementos: ${soma}`)
}

ProgressaoAritmetica(10, 1, 1)

function ProgressaoGeometrica(n, a1, r){
    let soma = 0
    for(let i = 0; i < n; i++){
        console.log(a1)
        soma += a1
        a1 *= r
    }
    console.log(`Soma dos elementos: ${soma}`)
}

ProgressaoGeometrica(10, 1, 2)