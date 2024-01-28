
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaInicial from './components/Pages/PaginaInicial.jsx';
import Empresa from './components/Pages/Empresa.jsx';
import Contato from './components/Pages/Contato.jsx';
import Clientes from './components/Pages/Clientes.jsx';
import Headers from './components/Menu/MenuHamburguer/Header.jsx';
import BtnWhats from './components/Menu/BotãoWhatsZap/BtnZap.jsx';
import Footer from './components/Pages/Footer.jsx';

import { Geral } from './components/styled/App.js';

function App() {
  return (

    <Geral>
      <Router>
        <Headers />
          <Routes>
           <Route exact path="/" element={<PaginaInicial />}></Route>
           <Route exact path="/Empresa" element={<Empresa />}></Route>
           <Route exact path="/Contato" element={<Contato />}></Route>
           <Route exact path="/Clientes" element={<Clientes />}></Route>
          </Routes>
        <BtnWhats />
        <Footer />
      </Router>
    </Geral>

  );
}
export default App;