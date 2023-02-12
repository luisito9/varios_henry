const fs = require('fs/promises')

fs.readdir('./')
  .then(archivos => { // al método then llega un array con la lista de archivos del directorio actual './':
    for (let archivo of archivos) {
      console.log(archivo)
    }
  })
  .catch(error => {
    console.log(error)
  })