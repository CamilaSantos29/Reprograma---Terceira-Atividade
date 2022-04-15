// Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function determinaMaiorIdade(idade) {
    if (idade >= 18 ) {
    return `${idade} é maior de idade.`
    } else {
    return `${idade} é menor de idade.`
   }
}

 console.log(determinaMaiorIdade(10)) //menor
 console.log(determinaMaiorIdade(20)) //maior