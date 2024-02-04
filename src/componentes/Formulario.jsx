import React, { useState } from "react";
import '../stylesheets/formulario.css'
import { v4 as uuidv4 } from 'uuid';

function Formulario({onSubmit }) {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [rating, setRating] = useState('');
    const [ubicacion, setUbicacion] = useState('');

    const manejarCambioN = e => {
        const inputValue = e.target.value;

        setNombre(inputValue);
    console.log(inputValue);
    };
    const manejarCambioD = e => {
        setDescripcion(e.target.value);
    };
    const manejarCambioR = e => {  
        setRating(e.target.value);
    };
    const manejarCambioUbicacion = (e) => {
  setUbicacion(e.target.value);
    };

    const manejarEnvio = e =>{
        e.preventDefault();
        const nuevaCafeteria= {
            id: uuidv4(),
            nombre: nombre,
            descripcion: descripcion,
            rating: rating,
            ubicacion: ubicacion
        }
        if (typeof onSubmit === 'function'){
            onSubmit(nuevaCafeteria);
        }
    }
    
    return(  
        <form className="contenedor-formulario" onSubmit={manejarEnvio} >
            <input className="nombre-caf" onChange={manejarCambioN} max={25} maxLength={25} name="nombre" type="text" placeholder="Nombre de la cafeteria..." />
            <input className="descripcion-caf" onChange={manejarCambioD} name="descripcion" type="text" placeholder="Descripcion..."  />
            <input className="rating-caf" onChange={manejarCambioR} name="rating" type="number" min="1" max="10" placeholder="Rating del 1 al 10..."  />
            <input className="ubi-caf" onChange={manejarCambioUbicacion} name="ubicacion" type="text" placeholder="Ubicacion.." />
            <button className="btn-subir">Agregar Cafeteria</button>
        </form>
    );
}

export default Formulario;