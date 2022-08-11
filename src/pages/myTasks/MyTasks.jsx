import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MyTasks = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Button variant='contained' onClick={ () => navigate('/login')}>LOGOUT</Button>
        </div>
    );
}

export default MyTasks;
