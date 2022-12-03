import React from "react";


function ListaContactos(props) {
    return(
        <div>
            <h2> MIS CONTACTOS</h2>
            {props.children}
        </div>
    )
}

export default ListaContactos;