import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ClockFunctional = (props) => {
    // Pasamos una fecha como estado inicial:
    const [fecha, setFecha] = useState(new Date());
    
    // Iniciamos desde la edad actual:
    const initialVal = 36;
    const [edad, setEdad] = useState(initialVal);
    const nombre = 'Javier';
    const apellidos = 'Álvarez';


    const tick = () => {
        setEdad(edad + 1);
        setFecha(new Date());
    };
    
    useEffect(() => {
        let timerID = setInterval( () => tick(), 1000
        );
        return () => {
            clearInterval (timerID);
        };
    });
    
 
    return (
        <div>
            <h2>
            Hora Actual</h2>  
            <h2>{fecha.toLocaleTimeString()}</h2>
            <h1>{nombre} {apellidos}</h1>
            <h3>Edad: {edad}</h3>
        </div>
    )
};

ClockFunctional.propTypes = {
    name: PropTypes.string
};

export default ClockFunctional;
