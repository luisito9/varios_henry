// Llama a la funcion que quieras correr: 
// Llama a la funcion que quieras correr: 

agregar_nodo();
modificar_nodo();
reemplazar_nodo();
//eliminar_nodo();


function agregar_nodo(){
  elemento = document.createElement("li");

 contenido = document.createTextNode("Este es el Texto Agregado ");

 elemento.appendChild(contenido);

  /*padre = document.getElementsByTagName("li")[0].parentNode;/*Este forma o la de abajo. dependiendo de lo que se necesite*/
  var padre = document.getElementById("agregar");

  primerElemento = document.getElementsByTagName("li")[0];

  padre.insertBefore(elemento,primerElemento);

 //padre.appendChild(elemento); 

 return;
}

function modificar_nodo(){
elemento = document.getElementById("tercero");
elemento.innerHTML = "Este es el Texto <i>Modificado<i>";
/*Tambien Con:
elemento.textContent = "Este es el Texto <i>Modificado<i>";*/

return;
}

function reemplazar_nodo(){
 elemento = document.createElement("li");

 contenido = document.createTextNode("Este es el Texto Reemplazado");

 elemento.appendChild(contenido);

 padre = document.getElementsByTagName("li")[4].parentNode;

 referencia = document.getElementsByTagName("li")[4];/*Elemento
  a reemplazar*/

 padre.replaceChild(elemento, referencia);

 return;
}

function eliminar_nodo(){
padre = document.getElementsByTagName("li")[3].parentNode;

 referencia = document.getElementsByTagName("li")[3];/*Elemento
  a reemplazar*/

 padre.removeChild(referencia);

 document.write("Se elimino un elemento");
 return
}


/*Para crear un div y cambiar sus atributos*/

var elemento = document.createElement("div");
var padre = document.getElementById("contenedor");
var referencia = document.getElementsByTagName("div")[2];
elemento.setAttribute("class", "azul");
padre.insertBefore(elemento, referencia);


/* Esto es para acceder a los elementos en Javascript "PODEROSO"
var elementosP = document.getElementsByTagName("p");
var segundoParrafo = document.getElementById("segundo");

//PASOS PARA CREAR UN NODO.
// 1.- Crear el elemento
 elemento = document.createElement("h2");

// 2.- Crear un nodo de texto
 contenido = document.createTextNode("Este es el Titulo");

// 3.- Añadir el nodo de texto al elemento
 elemento.appendChild(contenido);

// 4.- Agregar atributos al elemento, es opcional
 elemento.setAttribute("align", "center");

 // 5.- Agregar el elemento al documento
 document.body.appendChild(elemento); //lo coloca despues del body

 var padre = document.getElementsByTagName("li")[0].parentNode;
 var padre = document.getElementById("lista");*/