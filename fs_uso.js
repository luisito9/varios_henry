const fs = require('fs')

fs.writeFile('./archivo1.txt', 'Ejemplo de\ncreacion y lectura de un archivo con "fs".', error => {
  if (error)
    console.log(error)
  else
    console.log('El archivo fue creado !')
})

console.log('última línea del programa')

fs.readFile('./archivo1.txt', (error, datos) => {
    if (error)
      console.log(error)
    else
      console.log(`El contenido del archivo es : ${datos.toString()}`)
  })
  
  console.log('El archivo fue leido !')