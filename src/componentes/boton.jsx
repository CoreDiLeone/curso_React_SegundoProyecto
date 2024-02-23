import React from "react";

/*Aquí se utilizó sintaxis de desestructuración
para acceder a las propiedades. */
/*Las tres propiedades que vemos en este componente
definen el contenido del mismo (texto), el estilo que va a tener 
(botonClick) y la funcionalidad (manejarClick)*/
export function Boton({texto, botonClick, manejarClick }){
    return (
    <button className={ botonClick ? "boton-click" : "boton-reiniciar" }
    onClick={manejarClick}>
    {texto}
   
    </button>
    )
}

