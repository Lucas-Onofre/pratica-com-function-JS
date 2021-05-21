//04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.

function getDivisaoEResto (a, b){
    resto = a % b

    console.log(`Resultado da divisão é: ${Math.floor(a / b)}`)
    console.log(`Resto: ${resto}`)
}

getDivisaoEResto(4,4)