//31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
//e imprime a quantidade no console.

let vetor = [1, 2, 3, 4, -2, -5, 0, -60, 2, 70, -123]

const verificaNegativos = vetor =>{
    let negativos = 0;
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            negativos++
        }
    }
    console.log(`${negativos} números negativos.`)
}

verificaNegativos(vetor)