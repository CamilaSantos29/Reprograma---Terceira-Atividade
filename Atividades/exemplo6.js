//crie um algoritmo que converte dias em horas, quando recebe um número de dias.

function converteDiasEmHoras (totalDeDias) {
    const totalHorasPorDia = totalDeDias * 24
    return `Essa quantidade de dias equivale a ${totalHorasPorDia} horas`
  }
  
  const resultado = converteDiasEmHoras(10) //240 horas
  console.log(resultado)