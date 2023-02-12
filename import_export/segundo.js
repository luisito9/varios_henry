
import saludar,{Saludar, PI, usuario, password} from "./tercero.js";//Ojo con el (./)
import {funciones} from "./cuarto.js";//Para funciones si necesitas el "from".
console.log(PI, usuario, password)

console.log("Importe los datos y me sumó :" + funciones.sumar(10, 6));
console.log("Importe los datos y me restó :" + funciones.restar(10, 6));
saludar();
let saludo = new Saludar();//arriba importo Saludar, aqui creo el objeto
saludo;
