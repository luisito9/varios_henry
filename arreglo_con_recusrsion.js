
let arreglo = [];
  
function rangeOfNumbers(inicio, fin) {
  
   
    if (inicio === fin){
       (arreglo.push(inicio));
        console.log(arreglo) ;
        return ;
    }

    if (inicio < fin ){
        arreglo.push(inicio);
        rangeOfNumbers(inicio+1, fin);
    
      }
      
    };

  rangeOfNumbers(2,7);