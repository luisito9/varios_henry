//****************** Elementos del Dom *********************

console.log(window.document);//Trae todas las programa del documento Html
console.log(document);//Igual anterior
console.log(document.head);//Trae todo el Head del program Html
console.log(document.body);//Trae todo el Head del program Html
console.log(document.documentElement);//Trae todo html del program Html
console.log(document.doctype);//Tipo de documento
console.log(document.characterSet);//Juego de caracteres (UTF-8)
console.log(document.title);//trae el titulo
console.log(document.links);//listas de enlaces de documento Html
console.log(document.images);// trae las imagenes
console.log(document.forms);// los formularios en el programa
console.log(document.styleSheets);//hojas de estilo que tiene enlazado en doc. Html
console.log(document.scripts);//Los script de programa Html
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 4000);
document.write("<h2>Hola Mundo desde el DOM</h2>");