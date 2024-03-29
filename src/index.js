import React from 'react';
import ReactDOM from 'react-dom/client';

// Añadimos Bootstrap siempre encima que nuestro css:
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// ! Los estilos propios deben ir debajo de el de bootstrap para que no los pise:
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRouting from './AppRouting';
import Axiosapi from './components/pure/AxiosAPI';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppRouting/> */}
    <Axiosapi/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
