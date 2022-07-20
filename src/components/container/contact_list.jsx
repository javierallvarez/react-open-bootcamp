import React, { useEffect, useState } from 'react';
import { Contacto } from '../models/contact.class';
import ComponenteB from '../pure/contacto';
import ContactForm from '../pure/forms/contactForm';


const ComponenteA = () => {

    const defaultContact = new Contacto(
        'Frank', 
        'Gallagher', 
        'frankg@email.com', 
        false);
        
    const defaultContact2 = new Contacto(
        'Bimbo', 
        'Lolo', 
        'bimbol@email.com', 
        true);

    const [contactos, setContactos] = useState([defaultContact, defaultContact2]);
    
    const [loading, setLoading] = useState(true);

    // Pasa el valor de setLoading a false y muestra los console.log cada vez que haya una modificación en los contactos:
    useEffect(() => {
        console.log('Contact state has been modified')
        setLoading(false)
        return () => {
            console.log('Contact list component is going to unmount')
        };
    }, [contactos]);

    
    function contactStatus(contacto){
        console.log(contacto, ' is online');
        const index = contactos.indexOf(contacto);
        // Almacena en la variable todos los contactos que tenemos hasta el momento usando el factor de propagación:
        const tempContacts = [...contactos]
        // Pasa el valor contrario que tenía anteriormente:
        tempContacts[index].connected = !tempContacts[index].connected;
        // Actualizamos el estado del componente:
        setContactos(tempContacts)
    }

    /** Tras declarar estas funciones, vamos al componente hijo task.jsx
     * y declaramos las props como connect y remove.
     * Después las añadimos más abajo, como jsx.
    */
 


    function addContact(contacto){
        console.log('Adding', contacto, 'in contact list');
        const index = contactos.indexOf(contacto);
        const tempContacts = [...contactos];
        tempContacts.push(contacto);
        setContactos(tempContacts);
    }


    function deleteContact(contacto){
        console.log(contacto, ' was deleted');
        const index = contactos.indexOf(contacto);
        const tempContacts = [...contactos];
        tempContacts.splice(index,1);
        setContactos(tempContacts);
    }

    return (
        <div className='card'>
            <div className='card-header p-3'>
                <h1>Contactos:</h1>
            </div>
            <table>
                <thead>
                {/* <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr> */}
                </thead>
                <tbody>
                    { /* Iterar sobre una lista de tareas. Retornando la key es la forma de identificar un elemento dentro del DOM. Obtendremos tantas rows como contactos haya. */ }
                    { contactos.map((contacto, index) => {
                        return (
                            <ComponenteB 
                                key={index}
                                contacto={contacto}
                                connect={contactStatus}
                                remove={deleteContact}>
                            </ComponenteB>
                            )
                        }  
                    )} 
                </tbody>         
            </table>
            <div>
                <h2>Add contact: </h2>
                <ContactForm add={ addContact }></ContactForm>
            </div>    
        </div>
    )
}    

export default ComponenteA;