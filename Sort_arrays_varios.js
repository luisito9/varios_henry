var arr = [ 40, 1, 5, 200 ];
function comparar ( a, b ) { //Puedes cambiar el orden de los parametros en el return, muy bueno
  return a - b; 
}
  
arr.sort( comparar );  
console.log(arr)