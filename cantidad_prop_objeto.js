
// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
  // cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
  // u objetos anidados
  // Ejemplo:
  // var obj = {
  //   a: {
  //     a1: 10,
  //     a2: 'Franco',
  //     a3: {f: 'r', a: 'n', c: {o: true}}
  //   },
  //   b: 2,
  //   c: [1, {a: 1}, 'Franco']
  // }
  // countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
  // dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
  // Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

  var countProps = function (obj) {
    // Tu código aca:
    // el tipo de dato de array en realidad es un objeto entonces para diferenciarlo de los objetos literales usamos el método Array.isArray()
    // Paso 1: declarar una variable contadora. Con el método Object.keys(), para contar las propiedades del objeto padre
    let total = Object.keys(obj).length; // te pasa las propiedades del objeto padre.
    // Paso 2: recorrer el objeto evaluando el tipo de dato almacenado en cada propiedad:
    for (const propiedad in obj) {
      if (typeof obj[propiedad] === "object" && !Array.isArray(obj[propiedad])) {
        total = total + countProps(obj[propiedad]);
      }
    }
    return total;
  };
  var obj = {
    a: {
         a1: 10,
         a2: 'Franco',
         a3: {f: 'r', a: 'n', c: {o: true}}
       },
       b: 2,
       c: [1, {a: 1}, 'Franco', 5],
       e: "hola"
     }
  console.log(countProps(obj));