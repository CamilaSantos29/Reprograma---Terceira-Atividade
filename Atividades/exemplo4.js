//Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function identificaParOuImpar(num) {
    if (num % 2 == 0) {
      return `${num} é par.`
    } else {
      return `${num} é ímpar.`
    }
  }
  
  const resultado = identificaParOuImpar(1000) 
  console.log(resultado)