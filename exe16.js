//16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica O programa recebe
//como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valoresnuméricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
//3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

function Calculadora(a, b, operacao){
    switch(operacao){
        case '+':
            console.log(`${a} + ${b}: ${a + b}`)
            break
        case '-':
            console.log(`${a} - ${b}: ${a - b}`)
            break
        case '*':
            console.log(`${a} * ${b}: ${a * b}`)
            break
        case '/':
            console.log(`${a} / ${b}: ${a / b}`)
            break
        default:
            console('[ERRO] Informe uma operação válida.')
            break
    }
}

Calculadora(3, 2, '-')
Calculadora(3, 2, '*')
Calculadora(3, 2, '+')
Calculadora(3, 2, '/')