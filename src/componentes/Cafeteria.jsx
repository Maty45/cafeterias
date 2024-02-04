import React from "react";
import  '../stylesheets/cafeteria.css';

function Cafeteria( { nombre, descripcion, id, rating, ubicacion, eliminarCafeteria }) {

    return(
        <div className="contenedor-cafeteria">
            <div className="fila primera">
            <h1 className="nombre" >{nombre}</h1>
            <p className="rating" >{rating}</p>
            </div>
            <div className="fila segunda">
            <p className="descripcion" >{descripcion}</p>
            </div>
            <div className="fila tercera">
            <p className="ubicacion" >{ubicacion}</p>
            </div>
            <div className="contenedor-eliminar" onClick={ () => eliminarCafeteria(id)}>
            <p className="btn-eliminar" onClick={ () => eliminarCafeteria(id)}>Eliminar</p>
            </div>
        </div>
    );
}

export default Cafeteria;