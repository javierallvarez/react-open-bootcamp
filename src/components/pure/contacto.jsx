import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contact.class';

const ComponenteB = ({ contacto }) => {
    return (
        <div>
            <h2>Nombre: { contacto.nombre }</h2>
            <h3>Apellido: { contacto.apellido }</h3>
            <h4>Email: { contacto.email }</h4>
            <p>{ contacto.conectado ? 'Contacto En Línea':'Contacto No Disponible'} </p>
        </div>
    )
}

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ComponenteB;