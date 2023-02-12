 
 // Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
  // aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
  // Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
  // Ejemplo 1:
  //    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
  //    lista.changeNotNumbers();
  //    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1
  // Tu código aca:

  var changeNotNumbers = function () {
   
    let actual = this.head, // si hay algo se almacena el objeto node que tiene value y next.
      counter = 0;
    /*Si a Number(le pasas un valor) te lo transforma a número siempre y cuando pueda. Si no se puede te devuelve NaN.
     Con el isNaN verifico si no se pudo transformar a number  */
    while (actual) {
      if (Number.isNaN(Number(actual.value))) {
        actual.value = "Kiricocho";//como si lo puede cambiar a numero entra al if y lo reemplaza por "kiricocho"
        counter++;
      }
      actual = actual.next;
    }
    //retorno la cantidad de cambios
    console.log(counter);
    return counter;
  };
  let lista = ([1, '2', false, 'Franco']);
  console.log(changeNotNumbers(lista));

