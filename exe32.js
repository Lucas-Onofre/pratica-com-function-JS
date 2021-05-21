//32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function getMedia(vetor){
    let total = 0
    for(let i = 0; i < vetor.length; i++){
        total += vetor[i]
    }
    return media = total / vetor.length
}

console.log(getMedia(vetor))