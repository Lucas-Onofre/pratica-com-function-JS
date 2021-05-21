//36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
//inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
//elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
//o valor do elemento for maior que 5.

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function MultiplicaVetor(vetor, n1){
    let vetorAtualizado = []
    for(let i = 0; i < vetor.length; i++){
        vetorAtualizado.push(vetor[i] * n1)
    }
    console.log(vetorAtualizado)
}

MultiplicaVetor(vetor, 2)

//utilizando forEach :D
function MultiplicaSeMaiorQueCinco(vetor, n1){
    let vetorAtualizado2 = []
    vetor.forEach(elemento =>{
        vetorAtualizado2.push(elemento * n1)
    })
}

MultiplicaVetor(vetor, 3)