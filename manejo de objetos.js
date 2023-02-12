const datos = {
    nombre: " Luis Viña Gonzalez ",
    sexo: " masculino ",
    edad: 51,
    direccion: " El Trigal.",
    venezolano: true,
};

if (typeof(datos.venezolano=="true")){
    console.log(`Si, ${ datos.nombre } es venezolano`)
}
if (typeof(datos.edad==="number") && typeof(datos.direccion=="string")) {
    console.log("Esta es la edad y la direccion correcta")
} 
if (typeof(datos.direccion)=="string"){
    console.log("Esta es la direccion")
}
if (datos.length = 4) {
    console.log("El tamaño del objeto es 4")
}