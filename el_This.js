//console.log(this);
//console.log(window);
//console.log(this===window);

this.nombre = "contexto Global";
console.log(this.nombre);

function imprimir(){
    console.log(this.nombre);
}
imprimir();
const obj = {
    nombre: "Contexto Objeto",
    imprimir: function(){
        console.log(this.nombre);
    }
}
obj.imprimir();

const obj2 = {
    nombre: "Contexto Objeto 2",
    imprimir : imprimir,
}
obj2.imprimir();