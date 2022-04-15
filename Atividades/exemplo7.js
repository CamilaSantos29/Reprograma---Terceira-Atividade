//Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Diga se esse numero é par ou ímpar.

function valoresParametros(num1, num2) {
    const divisaoEntreParametros = (num1 + num2)/2.
  
     if (divisaoEntreParametros % 2 == 0) {
        return `${divisaoEntreParametros} é par.`
        } else {
        return `${divisaoEntreParametros} é ímpar.`
        }
    }
        
        const resultado = valoresParametros(50, 10)  //30 - par
        console.log(resultado)
  
  