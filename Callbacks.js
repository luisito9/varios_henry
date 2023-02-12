
//************************* Ejemplo 01 ****************************

  function meses_Año_1(Meses, callback, cita_navideña){ //funcion de Orden Superior
    var meses = "Los meses del año son: " + Meses + cita_navideña;
    callback(meses); // La funcion callback es llamada aqui con su argumento
  }
  
  function MesesAño_2(num){//Funcion Callback con su argumento
    console.log(num);
  }

  meses_Año_1("Enero, Febrero, Marzo, Abril ....! ", MesesAño_2, " llegó Diciembre, !Feliz Navidad para Todos !"); // Aqui se llama a
   //la funcion Superior y se le pasa como argumento la funcion Callback en orden estricto
  

  //************************* Ejemplo 02 ****************************

  function solicitudServidor(resp, callback){ //funcion de Orden Superior

      callback(resp);  // La funcion callback es llamada aqui con su argumento
  }
  
  function callback(consulta){//Funcion Callback con su argumento
    console.log("Respuesta del servidor: " + consulta);
  }
  
  solicitudServidor("El vaso está medio lleno ", callback);

 //************************* Ejemplo 03 ****************************


  function adicion(a, b, callback) {
    callback(a + b);
  }
  
  adicion(3, 5, function(result) {
    console.log(result); });
