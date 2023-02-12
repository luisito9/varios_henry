import React, { useState, useEffect } from "react"

 function App() {
    const [cuenta, setCuenta] = useState(0)

    useEffect (()=>{
        console.log("La cuenta es:" + cuenta)

    })
    return (
        <div>
            <h1>La cuenta da: {cuenta}</h1>
            <button onClick={()=> setCuenta(cuenta + 1)}>Aumentar</button>
        </div>
    )
}