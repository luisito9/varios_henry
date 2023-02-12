//Homework JavaScript Avanzado I

//Scope & Hoisting

//Determiná que será impreso en la consola, sin ejecutar el código.

//> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

//```javascript
var x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10; 
  console.log(x);          //imprime 10 
  console.log(a);          //imprime 8
      var f = function(a, b, c) {
         b = a;
         var x = 10;       
         console.log(b);   //imprime 8
         b = c;
         var x = 5;
      }
  f(a,b,c);
  console.log(b);          //imprime 9
}
c(8,9,10);
console.log(b);            //imprime 10
console.log(x);            //imprime 1


//`javascript
console.log(bar);          //imprime undefined
console.log(baz);           //imprime error reference
foo();
function foo() { console.log('Hola!'); }  //imprime hola
var bar = 1;
baz = 2;


//```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);   //imprime Franco


//```javascript
var instructor = "Tony";
console.log(instructor);//imprime Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);//imprime Franco
   }
})();
console.log(instructor);//imprime tony


//```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);   //imprime The Flash
    console.log(pm);          //imprime Reverse Flash
}
console.log(instructor);   //imprime The Flash
console.log(pm);        //imprime Franco

//### Coerción de Datos

//¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

//```javascript
/*6 / "3"     2
"2" * "3"   6
4 + 5 + "px"  9PX
"$" + 4 + 5   $45
"4" - 2     2
"4px" - 2   NAN
7 / 0      infinito
{}[0]      undefined
parseInt("09")  9
5 && 2          2
2 && 5          5
5 || 0          5
0 || 5          5
[3]+[3]-[10]    23
3>2>1           false
[] == ![]       true*/


//> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


//### Hoisting

//¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

//```javascript
function test() {
   console.log(a);  undefined
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;      2
   }
}

test();


//Y el de este código? :

//```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies'; //Nada
        return snack;
    }
    return snack;
}

getFood(false);



//### This

//¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

//javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;   
      }
   }
};

console.log(obj.prop.getFullname()); //Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test());   //undefined


//### Event loop

//Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

//javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 3000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();// 1 , 3 , 4, 2

