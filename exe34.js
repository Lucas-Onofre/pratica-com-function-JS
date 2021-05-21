//34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
//todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras

function verificaString(string1, string2){
    let estaContido = true //booleano para retornar true ou false
    for(let i = 0; i < string1.length; i++){ //laço para passar por todo conteudo da string
        let caractereString1 = string1.charAt(i).toLowerCase() //colocando os caracteres da string1 em Low
        for(let j = 0; j < string2.length; j++){
            let caractereString2 = string2.charAt(j).toLowerCase() //colocando os caracteres da string2 em low
            if(caractereString1 == caractereString2){ //compara se os caracteres sao iguais
                estaContido = true
                break
            }
            else{
                estaContido = false
            }
        }
    }
    return estaContido
}

console.log(verificaString('CaB', 'cbA'))