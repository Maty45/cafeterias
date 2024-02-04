import React from "react";
import Lista from "./componentes/Lista";
import '../src/App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-titulo'>
        <h1 className='titulo'>New Cafe App</h1>
      </div>
      <div className="intro">
        <h2 className="titulo-parrafo">¡Bienvenido a New Cafe App!</h2>
        <p className="parrafo">Esta plataforma personalizada está diseñada para ti. Imagina tener tu <strong>propia lista privada</strong> de cafeterías favoritas, cuidadosamente recopiladas y organizadas en un solo lugar. Cuando llegue el momento de decidir entre tantas opciones de cafeterias que has recorrido, podrás recordarlas a todas. Puedes añadir fácilmente tus cafeterías preferidas, proporcionando detalles como nombre, ubicación y cualquier nota especial que desees recordar. La integración con mapas te permite visualizar la ubicación de tus lugares seleccionados, creando tu propio mapa personalizado de cafeterías. ¡Comienza a construir tu lista de cafeterías ahora!</p>
      </div>
      <div className='contenedor-principal'>
          <Lista  />

      </div>
    </div>
  );
}

export default App;