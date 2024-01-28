import React from 'react';
import {Routes , Route }from 'react-router-dom';
import Clientes from './components/Pages/Clientes';
import Empresa from './components/Pages/Empresa';
import Contato from './components/Pages/Contato';
import PaginaInicial from './components/Pages/PaginaInicial';

const Routes =()=>{
   return(
    <Routes>

        <Route exact path="/" element={PaginaInicial}></Route>
        
        <Route exact path="/Empresa"element={Empresa}></Route>
        
        <Route exact path="/Contato"element={Contato}></Route>
        
        <Route exact path="/Clientes"element={Clientes}></Route>

    </Routes>
   ) ;
}

export default Fabricio;