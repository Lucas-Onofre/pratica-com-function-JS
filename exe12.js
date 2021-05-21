//12) Faça um algoritmo que calcule o fatorial de um número.

function fatorial(n1){
    let i = n1

    while(i > 0){
        r = n1
        aux = r - 1
        r = r * aux
        total = r * i;
        i--
    }
    console.log(total)
}

fatorial(7)