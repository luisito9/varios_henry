let Suma_factor = 0;

function factorial(x) {
if (x > -1 && x < 2) {
        return (Suma_factor=1);
    } 
    else if(x < 0){
        return (Suma_factor=0);
    }
    else
    Suma_factor+= x * factorial(x-1);
    
    return(Suma_factor);
}
let num = 6;
factorial(num);
console.log(`El factorial de ${num} es ${Suma_factor}`);  

