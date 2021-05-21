//20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
//para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
//Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
//informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
//nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

const getNotas = (valor) =>{
    let n100 = 0
    let n50 = 0
    let n10 = 0
    let n5 = 0
    let n1 = 0

    while(valor >= 100){
        valor = valor - 100
        n100++
    }
    while(valor >= 50){
        valor = valor - 50
        n50++
    }
    while(valor >= 10){
        valor = valor - 10
        n10++
    }
    while(valor >= 5){
        valor = valor - 5
        n5++
    }
    while(valor >= 1){
        valor = valor - 1
        n1++
    }

    console.log(`Notas de 100: ${n100};`)
    console.log(`Notas de 50: ${n50};`)
    console.log(`Notas de 10: ${n10};`)
    console.log(`Notas de 5: ${n5};`)
    console.log(`Notas de 1: ${n1};`)
}

getNotas(14)