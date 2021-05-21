//29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
//deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
//deles estão fora do intervalo, escrevendo estas informações.

function getIntervalo(vetor){
    let cont = 0
    for(let i = 0; i <= vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            cont++
        }
    }
    console.log(`${cont} números estão no intervalo.`)
}

vetor = [14, 3, 4, 6, 10, 17, 41, 22, 13]
getIntervalo(vetor)