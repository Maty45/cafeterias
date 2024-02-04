import React, { useState } from "react";
import Cafeteria from "./Cafeteria";
import Formulario from "./Formulario";
import '../stylesheets/lista.css'
import Mapa from "./Mapa";

function Lista() {

    const [cafeterias, setCafeterias] = useState([]);
    const [resultados, setResultados] = useState([]);
    const [posicionMarcador, setPosicionMarcador] = useState([-32.888, -68.839]);
    const [marcadores, setMarcadores] = useState([]);

    const buscarUbicacion = async (cafeteria) => {
        try {
          const base_url = "https://nominatim.openstreetmap.org/search";
          const parametros = {
            q: cafeteria.ubicacion,
            format: "json"
          };
    
          const url = new URL(base_url);
          url.search = new URLSearchParams(parametros);
    
          const respuesta = await fetch(url);
          const datos = await respuesta.json();
    
          if (datos && datos.length > 0) {
            const primerResultado = datos[0];
            setPosicionMarcador([parseFloat(primerResultado.lat), parseFloat(primerResultado.lon)]);
            setMarcadores((prevMarcadores) => [...prevMarcadores, primerResultado]);
            datos[0].place_id = cafeteria.id;
          } else {
            setResultados([]);
          }
        } catch (error) {
          console.error("Error al buscar la dirección:", error);
        }
      };

    const agregarCafeteria = cafeteria => {
        if (cafeteria.nombre.trim() && cafeteria.descripcion.trim() ) {
            cafeteria.nombre = cafeteria.nombre.trim();
            cafeteria.descripcion = cafeteria.descripcion.trim();
          
            const nombreExistente = cafeterias.find(c => c.nombre === cafeteria.nombre);
            if (nombreExistente) {
                alert("Ya existe una cafetería con este nombre");
                return;
            }

            const ubicacionExistente = cafeterias.find (c => c.ubicacion === cafeteria.ubicacion );
            if (ubicacionExistente) {
              alert("Ya existe una cafeteria con esta ubicacion");
              return;
            }

            const cafeteriasActualizadas = [...cafeterias, cafeteria];
            setCafeterias(cafeteriasActualizadas);
        }
          buscarUbicacion(cafeteria);
    };

    const eliminarCafeteria = (id) => {
    // Filtra las cafeterías excluyendo la que se eliminará
    const cafeteriasActualizadas = cafeterias.filter(cafeteria => cafeteria.id !== id);
    setCafeterias(cafeteriasActualizadas);
    //Elimino el marcador del mapa
    const marcadoresActualizados = marcadores.filter(marcador => marcador.place_id !== id);
    setMarcadores(marcadoresActualizados);
    };

    

    return(
        <div className="contenedor-lista" >
            <div className="contenedor-lista-form"> 
                <div className="formulario-contenedor">
                    <Formulario onSubmit={agregarCafeteria} />
                </div>
                <div className="lista">
                {
                    cafeterias.map( (cafeteria) =>
                        <Cafeteria key={cafeteria.id} eliminarCafeteria={eliminarCafeteria} id={cafeteria.id} descripcion={cafeteria.descripcion} nombre={cafeteria.nombre} rating={cafeteria.rating} ubicacion={cafeteria.ubicacion}  />
                    )
                }
                </div>
            </div>
            <div className="mapa-contenedor">
            <Mapa marcadores={marcadores} />
            </div>
        </div>
    );
}

export default Lista;
