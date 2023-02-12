
datos = [
    { nombre:"pepe",
      edad:34
    }
]

 getDatos = () => {
        if(datos.length === 0){
            throw Error ("No existen Datos")
        }
        setTimeout(() => {
            console.log(datos)
        }, 1500)
    
}
(async function fetchingData () {
    try {
        fetch_datos = await getDatos()
        console.log(fetch_datos)
        console.log("da undefined pues no ha llegado todavia la respuesta")
    }catch (Error){
        console.log(`${Error}`)
    }
})()// si encierro la funcion entre parentesis y le pongo () al final se autollama

//fetchingData()

