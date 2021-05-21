//21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
//considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
//de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
//idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

const PlanoDeSaude = (idade) => {
    let valor = 0

    if(idade < 10){
        valor = 80
        return valor + 100
    }
    else if(idade >= 10 && idade <= 30){
        valor = 50
        return valor + 100
    }
    else if(idade > 30 && idade <= 60){
        valor = 95
        return valor + 100
    }
    else{
        valor = 130
        return valor + 100
    }
}

console.log(PlanoDeSaude(9))
console.log(PlanoDeSaude(20))
console.log(PlanoDeSaude(50))
console.log(PlanoDeSaude(61))