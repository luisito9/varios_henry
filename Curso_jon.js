
 console.log("*********************** Uso de Funciones *************************");
//Uso de los templates string

function saludo(nombre, edad, genero) {
        
    console.log("Esto es una funcion Declarada")
    console.log(`Buen dia ${nombre}, tu edad es : ${edad} años,`);
    console.log(` y tu Genero es ${genero}`);
   
    }
    saludo("Luis", 51, "Masculino");

    saludar = function saludo(nombre_1, edad_1, genero_1) {
    console.log("Esto es una funcion Expresada, pues esta asignada como valor a una variable.")
    console.log(`Buen dia ${nombre_1}, tu edad es : ${edad_1} años,`);
    console.log(` y tu Genero es también ${genero_1}<br><br>`);
   
    }
    saludar("Antonio", 25, "Masculino");

    console.log("*********************** Uso de Arreglos *************************");

   const arreglo = [1, "buen", "dia",[2, "amigos", 34, "saludos"]];
   console.log("<br>");
   console.log(`eL dato es ${arreglo[3][1]}` );
   const t = Array(5).fill(" hola ");//Para llenar un arreglo con datos iguales
   console.log(", El tamaño de arreglo es : " + arreglo.length);//El tamaño del arreglo.
   console.log("<br>");
   console.log("<br>");



    console.log("************************ manejo de Objetos *************************");

    const Luis = {//Esto es un objeto
    nombre : "Luis",
    apellido : "Viña G.",
    edad : 51,
    pasatiempos : ["Programar", "Hipisno", "Boxeo"],
    soltero : true,

        contactos : { //un objeto dentro de un objeto se declara con dos puntos(:)
            celular : 4156399,
            correo : "luis23via@gmail",
            twiter : "luis_twiter_70"
        },

        saludar : function (saludo) { //una funcion dentro de un objeto
            console.log(saludo);

        },
      
   }
   Luis.nombre="Carlos";//Asigno un valor a un atributo del objeto
   console.log(Luis.nombre);
   console.log(Luis.pasatiempos);
   console.log(Luis.pasatiempos[2]);
   console.log(Luis.contactos.correo);
   console.log(Luis.contactos.twiter);
   Luis.saludar("Buenas noches");
   console.log(Luis.soltero);
   console.log("<br>");
   console.log("Esto Genera los Atributos del Objeto: " + Object.keys(Luis.contactos));//Genera los Atributos del Objeto
   console.log("Esto Retorna los valores del objeto: " + Object.values(Luis.contactos));//Retorna los valores del objeto

   console.log("Retorna todos valores del objeto: " + Object.values(Luis));//Retorna los valores del objeto

