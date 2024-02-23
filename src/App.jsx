import './App.css';
import logoClick from "./images/hacer-click.png";
import { Boton } from './componentes/boton';
import "./estilos/boton.css"
import Contador from './componentes/contador';
import { useState } from "react";

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);

  }
  const reiniciarContador = () =>{
    setNumClicks(0);
  }

  return (
    <div className="App">
    
    <div className="logo-contenedor">
    <h1 className="titulo">Contador de clicks</h1>
    <img className="logo" src={logoClick} 
    alt="Logo de la página web" />
    </div>
    <div className="contenedor-principal">
      <Contador numClicks={numClicks} />
    </div>
    <div className="contenedor-botones">
      <Boton 
      texto="Click"
      botonClick={true}
      manejarClick={manejarClick}
      />
     <Boton 
      texto="Reiniciar"
      botonClick={false}
      manejarClick={reiniciarContador}
      />
      </div>
    </div>
  );
}

export default App;
