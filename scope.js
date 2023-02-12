var global = 'Soy global !';

function a() {
  // como no hay una variable llamada global en este contexto,
  // busca en el outer que es el global
  
  console.log(global);
  var global = 'Chao'; 
  return
}

function b(){
  // declaramos una variable global en nuestro contexto
  // esta es independiente 
  console.log(global); 
  global = 'Hellooooo!'; // cambia la variable del contexto global
 
 return
}

a(); 
b(); 
console.log(global + "aqui");

var global = 'Hola!';

function b(){
    var global = 'Chao'; 
    console.log(global); // Chao
    function a() {
        // como no hay una variable llamada global en este contexto,
        // busca en el outer que es scope de b;
        console.log(global); //Chao 
        global = 'Hello!'; // cambia la variable del contexto de b()
    }  
    a();
}

//a(); Ya no puedo llamar a a desde el scope global, acá no existe.
b();
console.log(global); // 'Hola!'

