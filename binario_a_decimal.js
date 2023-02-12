let suma = 0;
function BinarioADecimal(num){
    var array = (num.split(""));//split() divide un String en un array
    for (let i = 0; i < array.length; i++) {
        suma += array[i] * 2 **(array.length-1-i);
    }
    console.log("El numero decimal de " + num + " es: " + suma);
    return suma;
}

BinarioADecimal("1101");





