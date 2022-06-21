import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './App';
import Adm from './pages/adm';
import Cadastro from './pages/cadastro';
import Login from './pages/login';
import Landing from './pages/landing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/adm' element={<Adm />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/landing' element={<Landing />} />
            <Route path='/login' element={<Login />} />
        </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
