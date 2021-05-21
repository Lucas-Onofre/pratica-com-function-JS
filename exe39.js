//39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
//primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.

let vetor1 = [1, 2, 3, 4, 5]
let vetor2 = [5, 4, 3, 2, 1]
function InverteVetores(vetor1, vetor2){
    let v2 = vetor2.length - 1
    for(let i = 0; i < vetor1.length; i++){
        vetor1[i] = vetor2[i]
    }
    for(let i = 0; i < vetor2.length; i++){
        vetor2[i] = vetor1[v2]
        v2--
    }
    console.log(`Vetor1 : ${vetor1}`)
    console.log(`Vetor2 : ${vetor2}`)
}

InverteVetores(vetor1, vetor2)