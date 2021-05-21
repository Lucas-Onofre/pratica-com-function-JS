//38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
//ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
//para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

const RunNumbers = (a, b) =>{
    if(a > b){
        for(let i = 0; b <= a; i++){
            if(b%2 == 1){
            console.log(b)
            }
            b++
        }
    }
    else if(b > a){
        for(let i = 0; a <= b; i++){
            if(a%2 == 1){
            console.log(a)
            }
            a++
        }
    }
    else{
        console.log('Valores iguais.')
    }
}

RunNumbers(130, 1)