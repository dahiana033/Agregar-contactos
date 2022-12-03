import React from 'react';
import './App.css';

import Busqueda from './Busqueda';
import ListaContactos from './ListaContactos';
import Contacto from './Contacto';
import AgregaContacto from './AgregaContacto';
import {DirectorioContext, DirectorioProvider} from './Context/DirectorioProvider';


// let contactos=[
//   {
//     nombre:"Melanie",
//     telefono:"3221923196",
//     correo:"melanie.033@gmail.com"
//   },
//   {
//     nombre:"Fabian",
//     telefono:"3226178241",
//     correo:"fab@gmail.com"
//   },
//   {
//     nombre:"Marcelo",
//     telefono:"3228910196",
//     correo:"marcelo@gmail.com"
//   }
// ]


function App() 
{
  return (
    <DirectorioProvider>
    <DirectorioContext.Consumer>
      {
        ({
            ContactosFiltrados,
            borrarContacto,
            contadorContactos,
            modal,
            setModal,
        }) => (
          <React.Fragment>
          <center>
          <h1 id="directorio">DIRECTORIO ({contadorContactos})</h1>
          <Busqueda/>
          <ListaContactos>
            {
              ContactosFiltrados.map((contacto)=>{
                return(
                  <Contacto
                  nombre={contacto.nombre}
                  correo={contacto.correo}
                  telefono={contacto.telefono}
                  borrarContacto={()=>{borrarContacto(contacto.nombre)}}
                />  
                )
              })
            }
          </ListaContactos>
          <button onClick={()=>{setModal(true)}} class="Agregar">Agregar Contacto</button>
          {modal && <AgregaContacto/>}</center>
          
          </React.Fragment>
        )
      }
    </DirectorioContext.Consumer>
    </DirectorioProvider>

  
  );
}


export default App;
