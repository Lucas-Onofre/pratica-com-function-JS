//23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
//aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
//aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
//"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

const calculoNotas = (nota1, nota2, nota3, cdAluno) => {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let media = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    console.log(`ALUNO ${cdAluno} -> Notas: ${nota1}, ${nota2}, ${nota3}, o aluno está ${media > 5 ? 'APROVADO' : 'REPROVADO'} com média ${media}`)
}
calculoNotas(5, 8, 4, 3333)

const sort = (valor1, valor2, valor3, valor4) =>{
    let valores = []
    valores.push(valor1)
    valores.push(valor2)
    valores.push(valor3)
    valores.push(valor4)
    //forma extensa
    valores.sort(function comparar(a,b){
        if(a >= b){
            return 1
        }
        else{
            return -1
        }
    })

    //array function com ternario
    valores.sort((a,b) => a < b? 1 : -1)
    console.log(valores) 
}

sort(3, 2, 6, 40)