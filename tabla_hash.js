
class Hash_Table {//Esto es una clase **********
    constructor(Saludo) {// su constructor
     console.log(Saludo);
    }

    funcion_Hash(key) {
        let sum = 0;

        for (let i = 0; i < key.length; ++i) {
            sum += key.charCodeAt(i);
        }
        console.log(sum % 71);
    }


    
}//aqui termina la clase Hash_Table ************

const hashTabla = new Hash_Table("pepe");
hashTabla.funcion_Hash("Luis Viña");
