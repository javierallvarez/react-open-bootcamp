import React from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes} from 'react-router-dom';
import ErrorPage from './pages/404/ErrorPage';
import LoginPage from './pages/auth/LoginPage';
import MyTasks from './pages/myTasks/MyTasks';
import HomePage from './pages/home/HomePage';

const AppRouting = () => {

    const logged = true




    return (
        <BrowserRouter>
            <div>
                <Link to='/'>HOME · </Link>
                <Link to='myTasks'>MY TASKS · </Link>
                <Link to='/404'>ERROR </Link>
                
            </div>

            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/myTasks' element={
                    logged
                    ?
                    <MyTasks/>
                    :
                    <Navigate replace to='/login'/>
                }
                />
            </Routes>

        </BrowserRouter>
    );
}

export default AppRouting;

