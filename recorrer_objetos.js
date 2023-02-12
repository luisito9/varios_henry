//Usando la propiedad Object.keys()  
//devuelve un array de las valores de las propiedeades de un objeto, 

let perro = {
    nombre: "Scott",
    color: "Marron",
    macho: true,
    edad: 4
  };
  
  let valor = Object.keys(perro); // claves = ["Scott", "Marron", "true", "4"]
  for(let i=0; i< valor.length; i++){
    let valores = valor[i];
    console.log(perro[valores]);
  }


  //2. Usando la propiedad Object.values()
  let gato = {
    nombre: "Mack",
    color: "Amarillo",
    macho: true,
    edad: 8
  };
  
  let valores = Object.values(gato); // valores = ["Mack", "Amarillo", true, 8];
  for(let i=0; i< valores.length; i++){
    console.log(valores[i]);
  }
 

  //3. Usando un bucle for...in
  let sapo = {
    nombre: "sapito",
    color: "verde",
    macho: false,
    edad: 2
  };
  
  for (let clave in sapo){
    console.log(sapo[clave]);
  }
 
  //4. Usando la propiedad Object.entries() con un forEach()

  let toro = {
    nombre: "Cow",
    color: "Negro",
    macho: true,
    edad: 10
  };
  
  Object.entries(toro).forEach(([key, value]) => {
    console.log(value)
  });
  

  //5. Usando la propiedad Object.entries() y un bucle for...of

  let buey = {
    nombre: "Bueyen",
    color: "azul",
    macho: false,
    edad: 5
  };
  
  for(const [key, value] of Object.entries(buey)){
    console.log(value)
  }
  
  //calcular cuántas propiedades tiene un objeto ?

  const car = {
    color: 'Blue',
    brand: 'Ford',
    model: 'Fiesta', año: '2020',
  }
  console.log(Object.keys(car).length);
  console.log(car.color);
  car.color='negro';
  console.log(car);
  
