
//La sintaxis de desestructuración es una expresión de JavaScript que permite
// desempacar valores de arreglos o propiedades de objetos en distintas variables.


let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, c,...rest] = [10, 20, 30, 40, 50, "hola"];

console.log(rest);
// expected output: Array [40,50]
