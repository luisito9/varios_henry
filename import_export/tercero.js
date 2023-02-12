
export const PI = Math.PI;

export let usuario = "Miguel de Cervantes";
export let password = "Dulcinea_1564";

export default function saludar() {
    console.log("Hola, esta es una funcion default !");
}

export class Saludar{
    constructor(){
        console.log("Esto es una Clase exportada");
    }
}