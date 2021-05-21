//30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
let vetor = [1, 5, 3, 0, 10, 34, 23, 11, 2, 7]

function MaiorMenor(vetor){
    vetor.sort((a,b) => a < b? 1 : -1)
    maior = vetor[0]
    menor = vetor[vetor.length - 1]
    console.log(`Maior: ${maior} --- Menor: ${menor}`)
}

MaiorMenor(vetor)