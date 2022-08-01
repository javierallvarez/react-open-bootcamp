import React, {useState} from 'react';


/**
 * Return a random number between min and max.
 */
function makeRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}


let red = parseInt(makeRandomNumber(0,255));
let green = 255;
let blue = 0;


const enterSquare = {
    backgroundColor: `rgb(${red},${green},${blue})`
};

const outSquare = {
    backgroundColor: 'black'
};


// Create a black and a green squares:
const TheBlackSquare = ({ propStyle, enterAction }) => {
    return (
        <div id='square' className='cursor' style={propStyle} onMouseEnter={enterAction}></div>
    )
}

const TheNotBlackSquare = ({ propStyle, outAction, doubleClickAction }) => {
    return (
        <div id='square' className='cursor' style={propStyle} onMouseLeave={outAction} onDoubleClick={doubleClickAction}></div>
    )    
        
}

const Blacksquare = () => {
    
    //const [action, setAction] = useState(outSquare);
    const [action, setAction] = useState(false);

    const enterAction = () => {
        setAction(true)
    }

    const outAction = () => {
        setAction(false)
    }

    const doubleClickAction = () => {
        setAction(false)
    }

    let randomSquare;

    if (action) {
        randomSquare = <TheNotBlackSquare propStyle={ enterSquare } outAction={ outAction } doubleClickAction={ doubleClickAction }></TheNotBlackSquare>
    } else {
        randomSquare = <TheBlackSquare propStyle={ outSquare } enterAction={ enterAction } ></TheBlackSquare>
    }


    return (

        <div id='square-container'>
             {randomSquare}         
        </div>
    );
};



export default Blacksquare;
