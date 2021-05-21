//40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
//modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
//conceito B e de 9,0 a 10,0 o conceito A

let vetorNotas = [3, 6, 8, 9]

function ConceitoNotas(vetorNotas){
    let vetorConceitos = []
    vetorNotas.forEach(elemento => {
        if(elemento > 0 && elemento <= 4.9){
            vetorConceitos.push('D')
        }
        else if(elemento < 6.9){
            vetorConceitos.push('C')
        }
        else if(elemento < 8.9){
            vetorConceitos.push('B')
        }
        else{
            vetorConceitos.push('A')
        }
    })
    console.log(vetorNotas)
    console.log(vetorConceitos)
}

ConceitoNotas(vetorNotas)