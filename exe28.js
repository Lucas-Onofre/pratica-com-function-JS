//28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const getParImpares = (vetorNumeros) =>{
    let par = 0
    let impar = 0

    for(i = 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] % 2 == 0){
            par++
        }
        else{
            impar++
        }
    }
    console.log(`Pares: ${par} ---- Impares: ${impar}`)
}

valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
getParImpares(valores)