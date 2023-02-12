
//Funcion Arrow

const saluda = (nombre) => {
    return `Hola ${nombre}`;
 }
 console.log = saluda('victor')
 

 // Vamos a compactar un poco más el código. sin llaves..y sin return

 const saluda2 = (nombre) =>
     `Hola ${nombre}`;
 
 console.log(saluda2('Victor'));  // => Hola Victor