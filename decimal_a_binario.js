
function DecimalABinario(num){
    let binario = 0;
    let num1 = num; 
    let array = [];

if (num <= 0){
    return ("0");
}
    while (num > 0)  {
        array.unshift(num % 2);
        num = Math.floor(num/2);
       
}
    binario = array.join( "" )// join() une todos los elementos de una 
                              //matriz en una cadena y devuelve esta cadena 
    console.log("El número binario de " + num1 + " es: " + binario);
  return ( binario );

 }
 DecimalABinario(4);
 