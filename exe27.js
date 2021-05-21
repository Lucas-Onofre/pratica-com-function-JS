//27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
//crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
//quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

const Crescimento = (altura1, altura2, taxa1, taxa2) =>{
    let ano = 0

    if(altura1 > altura2 && taxa2 > taxa1){
        while(altura2 <= altura1){
            altura2 = altura2 + (altura2 * (taxa2 / 100))
            altura1 = altura1 + (altura1 * (taxa1 / 100))
            ano++
        }
        return `A 2ª criança ultrapassará a 1ª em altura daqui a ${ano} ano(s)`
    }
    else if(altura2 > altura1 && taxa1 > taxa2){
        while(altura1 <= altura2){
            altura2 = altura2 + (altura2 * (taxa2 / 100))
            altura1 = altura1 + (altura1 * (taxa1 / 100))
            ano++
        }
        return `A 1ª criança ultrapassará a 2ª em altura daqui a ${ano} ano(s)`
    }
    else if(altura1 > altura2 && taxa1 > taxa2){
        return 'A primeira criança continuará mais alta.'
    }
    else if(altura2 > altura1 && taxa2 > taxa1){
        return 'A segunda criança continuará mais alta.'
    }
    else if(altura2 == altura1 && taxa1 > taxa2){
        while(altura1 <= altura2){
            altura2 = altura2 + (altura2 * (taxa2 / 100))
            altura1 = altura1 + (altura1 * (taxa1 / 100))
            ano++
        }
        return `A 1ª criança ultrapassará a 2ª em altura daqui a ${ano} ano(s)`
    }
    else if(altura2 == altura1 && taxa2 > taxa1){
        while(altura2 <= altura1){
            altura2 = altura2 + (altura2 * (taxa2 / 100))
            altura1 = altura1 + (altura1 * (taxa1 / 100))
            ano++
        }
        return `A 2ª criança ultrapassará a 1ª em altura daqui a ${ano} ano(s)`
    }
    else{
        return 'Alturas iguais.'
    }
}

console.log(Crescimento(1.80, 1.80, 10, 10))