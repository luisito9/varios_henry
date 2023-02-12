

//********************** Esto es igual *******************


  class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto
      this.ancho = ancho
    }
  
    get area_1() {
      return this.calcArea_1()
    }
  
    calcArea_1() {
      return this.alto * this.ancho
    }
  
}
  
  const square_1 = new Rectangulo(10, 10)
  
  console.log(square_1.area_1) // 100

  function hacerAlgo(){}
hacerAlgo.prototype.foo = "bar"; // añadir una propiedad al prototipo
var hacerUnaInstancia = new hacerAlgo();
hacerUnaInstancia.prop = "un valor"; // añadir una propiedad al objeto
console.log( hacerUnaInstancia );
