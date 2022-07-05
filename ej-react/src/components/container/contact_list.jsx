import React from 'react';
import { Contacto } from '../models/contact.class';
import ComponenteB from '../pure/contacto';


const ComponenteA = () => {
    const contactoPorDefecto = new Contacto('Tu nombre', 'Tu apellido', 'Tu email', false);

    return (
        <div>
            <div>
                <h1>Contactos:</h1>
            </div>
                <ComponenteB contacto={contactoPorDefecto}></ComponenteB>
        </div>
    )
}    

export default ComponenteA;