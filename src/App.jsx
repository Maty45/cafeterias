import React from "react";
import Lista from "./componentes/Lista";
import '../src/App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-titulo'>
        <h1 className='titulo'>Cafeteria App</h1>
      </div>
      <div className='contenedor-principal'>
          <Lista  />

      </div>
    </div>
  );
}

export default App;