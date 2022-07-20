import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contact.class';

const ComponenteB = ({ contacto, connect, remove }) => {

    /** Función que devuelve el correspondiente icono de usuario conectado */
    function contactIconConnected(){
        if(contacto.connected){
            return (<i onClick={() => connect(contacto)} className='bi-toggle-on cursor task-action' style={ { color: 'green' } }></i>)
        } else {
            return (<i onClick={() => connect(contacto)} className='bi-toggle-off cursor task-action' style={ { color: 'red' } }></i>)
        }
    }

    return (
        <tr className='bi bi-person-badge'>
            <th >
                { contacto.firstName } { contacto.lastName }
            </th>
            <td className='text-primary'>{ contacto.email }</td>
            <td>
                {/* Ejecutamos la función que devuelve el icono que corresponde al usuario conectado/no conectado: */}
                { contactIconConnected() }
            </td>   
            <td>{ contacto.connected ? 'Online':'Offline'} </td> 
            <td>
                <i  onClick={() => remove(contacto)} 
                    className='bi-trash task-action cursor' 
                    style={ { color: 'gray' } }>
                </i> 
            </td>    
        </tr>
    )
}

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
    connect: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default ComponenteB;