//Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function recebeNumero(num) {
    switch (num) {
      case '1':
        return 'é segunda'
        break
      case '2':
        return 'é terça'
        break
      case '3':
        return 'é quarta'
        break
      case '4':
        return 'é quinta'
        break
      case '5':
        return 'é sexta'
        break
      case '6':
        return 'é sábado'
        break
      case '7':
        return 'é domingo'
        break
      default:
        return 'não é um dia da semana'
    }
  }
  
  console.log(recebeNumero('7'))