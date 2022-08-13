import React, { useEffect } from 'react';
import { useState } from 'react';
import { getRandomJoke } from '../../utils/config/axiosService';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { Button } from '@mui/material';

const Axiosapi = () => {
    
    const [joke, setJoke] = useState({});

    // useEffect(() => {
    //     obtainJoke()
    // }, []);

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const addLikes = () => {
        setLikes(likes + 1);
    }
    
    const addDislikes = () => {
        setDislikes(dislikes + 1);
    }
    
    const obtainJoke = () => {
        getRandomJoke()
        .then((response) => {
            if (response.status === 200){
                setJoke(response.data)
            }
            console.log(response.data.value)
        })
        .catch((error) => {
            alert(`Something went wrong: ${error}`)
        })
    }


    return (
        <div style={{width: '60ch', textAlign: 'center'}}>
            <h1>Chuck Norris API</h1>
            <Button variant='contained' onClick={obtainJoke}>More Jokes</Button>
            <p>{joke.value}</p>
            <div >
                <ThumbUpIcon onClick={addLikes} style={{fontSize: '24px', cursor: 'pointer'}}></ThumbUpIcon>
                <ThumbDownAltIcon onClick={addDislikes} style={{fontSize: '24px', cursor: 'pointer'}}/>
            </div>    
                <p>Likes {likes} · Dislikes {dislikes}</p>
        </div>
    );
}

export default Axiosapi;
